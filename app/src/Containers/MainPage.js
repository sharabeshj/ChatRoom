import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Auxillary from '../hoc/Auxillary/Auxillary';

import mainPageStyle from '../assets/jss/chatroom/views/mainPage';

class MainPage extends React.Component {
    render(){
        const { classes,...rest } = this.props;
        return(
            <Auxillary> hi </Auxillary>
        );
    }
}

export default withStyles(mainPageStyle)(MainPage);