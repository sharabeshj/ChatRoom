import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './Sections/NavBar';
import Chat from './Sections/Chat';
import Message from './Sections/Message';
import Auxillary from '../hoc/Auxillary/Auxillary';

import mainPageStyle from '../assets/jss/chatroom/views/mainPage';

let socket = null;

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chats : [],
            username : "xxx",
            text : '',
            time : ''
        };
    }
    componentDidMount(){
        this.scrollToBot();
        socket = new WebSocket('ws://127.0.0.1:8000/api/new');
        // console.log(socket)
        socket.onmessage = e => {
            const data = JSON.parse(e.data);
            
            this.setState({ chats : [...this.state.chats,data]})
        }
    }
    componentDidUpdate(){
        this.scrollToBot();
    }
    scrollToBot = () => {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }
    submitMessage = e => {
        e.preventDefault();
        const time = new Date();
        socket.send(JSON.stringify({
            username : `${this.state.username}`,
            content : `${this.state.text}`,
            time : time.getTime()
        }));    
        this.setState({
            text : ''
        });
        console.log(this.state)
    }
    handleTextChange = e => {
        this.setState({ text : e.target.value })
    }
    componentWillUnmount(){
        socket.close()
    }
    render(){
        const { classes,...rest } = this.props;
        const  {chats,username} = this.state;
        return(
            <Auxillary>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <NavBar />
                    <ul className = { classes.chats } ref = "chats">
                        {
                            chats.map((chat) => <Chat key = {chat.time} chat = {chat} username = {username}/>)
                        }
                    </ul>
                    <Message handleSubmit = {this.submitMessage} handleTextChange = {this.handleTextChange} content = {this.state.text}/>
                </div>
            </Auxillary>
        );
    }
}

export default withStyles(mainPageStyle)(MainPage);