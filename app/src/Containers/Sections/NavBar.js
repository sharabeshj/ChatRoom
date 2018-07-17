import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

import navbarsStyle from '../../assets/jss/chatroom/views/sections/navbarsStyle';


class NavBar extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div id = "navbar" className = { classes.navbar }>
                <div 
                    className = { classes.navigation }
                >
                    <Header
                        brand = "ChatRoom"
                        color = "dark"
                        rightLinks = {
                            <List className = { classes.list }>
                                <ListItem className = {classes.ListItem}>
                                    <Button
                                        href="#"
                                        className = {classes.navLink}
                                        onClick = { e => e.preventDefault()}
                                        color = "transparent"
                                    >
                                        Discover
                                    </Button>
                                </ListItem>
                                <ListItem className = { classes.listItem }>
                                    <Button 
                                        href = "#"
                                        className = { classes.navLink }
                                        onClick = { e => e.preventDefault() }
                                        color = "transparent"
                                    >
                                        Favorites
                                    </Button>
                                </ListItem>
                                
                            </List>
                        }
                    >

                    </Header>
                </div>
            </div>
        ) 
    }
}

