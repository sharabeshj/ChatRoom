import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './Sections/NavBar';
import Chat from './Sections/Chat';
import Message from './Sections/Message';
import Auxillary from '../hoc/Auxillary/Auxillary';

import mainPageStyle from '../assets/jss/chatroom/views/mainPage';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chats : [],
            username : "xxx",
            text : ""
        }
    }
    componentDidMount(){
        this.scrollToBot();
    }
    componentDidUpdate(){
        this.scrollToBot();
    }
    scrollToBot = () => {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }
    submitMessage = e => {
        e.preventDefault();
        
        const oldChat = this.state.chats
        const newChat = oldChat.concat([{
            username : "xyz",
            content : <p>{this.state.text}</p>
        }])

        this.setState({
            chats : newChat,
            text : ""
        });
    }
    handleTextChange = e => {
        this.setState({ text : e.target.value })
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
                            chats.map((chat) => <Chat chat = {chat} username = {username}/>)
                        }
                    </ul>
                    <Message handleSubmit = {this.submitMessage} handleTextChange = {this.handleTextChange}/>
                </div>
            </Auxillary>
        );
    }
}

export default withStyles(mainPageStyle)(MainPage);