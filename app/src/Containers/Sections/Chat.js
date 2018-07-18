import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';  

import Typography from '@material-ui/core/Typography';

import Paper from '../../Components/Paper/Paper';

import mainPage from '../../assets/jss/chatroom/views/mainPage';


const Chat = ({chat,username,...props}) => {
    const chatClasses = classNames({
        [props.classes.chat] : true,
        [props.classes.chatRight] : username === chat.username ? true : false
    })
    return (
        <li className = {chatClasses}>
            <Paper>
                <Typography variant = "subheading" >
                    {chat.username}
                </Typography>
                <Typography variant = "body1">
                    {chat.content}
                </Typography>
            </Paper>
        </li>
    );
}

Chat.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(mainPage)(Chat);
