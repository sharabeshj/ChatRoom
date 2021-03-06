import React from 'react';

import classNames from 'classnames';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import Menu from '@material-ui/icons/Menu';

import headerStyle from '../../assets/jss/chatroom/components/headerStyle';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobileOpen : false
        };
        this.handleDrawerToggle.bind(this);
    }

    handleDrawerToggle(){
        this.setState({ mobileOpen : !this.state.mobileOpen });
    }

    render(){
        const {
            classes,
            color,
            rightLinks,
            leftLinks,
            brand,
            fixed,
            absolute
        } = this.props;
        const appBarClasses = classNames({
            [classes.appBar] : true,
            [classes[color]] : color,
            [classes.absolute] : absolute,
            [classes.fixed] : fixed
        });
        const brandComponent = (
            <Button classNames = {classes.title}>
                {brand}
            </Button>
        );
        return (
            <AppBar className = {appBarClasses}>
                <Toolbar className = {classes.container}>
                    {leftLinks !== undefined ? brandComponent : null}
                    <div className = { classes.flex }>
                        { leftLinks !== undefined ? (
                            <Hidden smDown implementation = "css">
                                { leftLinks }
                            </Hidden>
                        ) : (
                            brandComponent
                        )}
                    </div>
                    <Hidden smDown implementation = "css">
                        { rightLinks }
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color = "inherit"
                            aria-label = "open drawer"
                            onClick = { this.handleDrawerToggle }
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation = "css"> 
                    <Drawer
                        variant = "temporary"
                        anchor = {"right"}
                        open = { this.state.mobileOpen }
                        classes = {{
                            paper : classes.drawerPaper
                        }}
                        onClose = { this.handleDrawerToggle }
                    >
                        <div className = {classes.appResponsive }>
                            { leftLinks }
                            { rightLinks }
                        </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        );
    }
}

Header.defaultProp = {
    color : "white"
};

Header.propTypes = {
    classes : PropTypes.object.isRequired,
    color : PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transaparent",
        "white",
        "rose",
        "dark"
    ]),
    rightLinks : PropTypes.node,
    leftLinks : PropTypes.node,
    brand : PropTypes.string,
    fixed : PropTypes.bool,
    absolute : PropTypes.bool
};

export default withStyles(headerStyle)(Header);
