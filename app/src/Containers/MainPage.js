import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './Sections'
import Auxillary from '../hoc/Auxillary/Auxillary';

import mainPageStyle from '../assets/jss/chatroom/views/mainPage';

class MainPage extends React.Component {
    render(){
        const { classes,...rest } = this.props;
        return(
            <Auxillary>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <NavBar />
                </div>
            </Auxillary>
        );
    }
}

export default withStyles(mainPageStyle)(MainPage);