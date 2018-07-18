import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Email from '@material-ui/icons/Email';

import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';

import navbarsStyle from '../../assets/jss/chatroom/views/sections/navbarsStyle';
import profileImage from '../../assets/img/avatar.jpg';


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
                                <ListItem className = {classes.listItem}>
                                    <Button
                                        justIcon
                                        round
                                        href = "#"
                                        className = { classes.notificationNavLink }
                                        onClick = { e => e.preventDefault() }
                                    >
                                        <Email className = { classes.icons }/>
                                    </Button>
                                </ListItem>
                                <ListItem className = { classes.listItem }>
                                    <CustomDropdown 
                                        left
                                        caret = { false }
                                        hoerColor = "black"
                                        dropdownHeader = "Dropdown Header"
                                        buttontext = {
                                            <img 
                                                src = {profileImage}
                                                className = { classes.img }
                                                alt = "profile"
                                            />
                                        }
                                        buttonProps = {{
                                            className : 
                                                classes.navLink + " " + classes.imageDropdownButton,
                                            color : "transparent" 
                                        }}
                                        dropdownList = {[
                                            "About me",
                                            "Settings",
                                            "Sign Out"
                                        ]}
                                    />
                                </ListItem>    
                            </List>
                        }
                    >

                    </Header>
                </div>
            </div>
        ); 
    }
}

export default withStyles(navbarsStyle)(NavBar);
