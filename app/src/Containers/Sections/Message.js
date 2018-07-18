import React from 'react';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { withStyles } from '@material-ui/core';
import customInputStyle from '../../assets/jss/chatroom/components/customInputStyle';
import Button from '../../Components/Button/Button';

class Message extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <footer>
                <GridContainer>
                    <GridItem xs = {10} sm = {10} md = {10} lg = {10}>
                        <CustomInput 
                            handleTextChange = {this.props.handleTextChange}
                            id = "regular"
                            inputProps = {{
                                placeholder : "Enter message"
                            }}
                            formControlProps = {{
                                fullWidth : true
                            }}
                        />
                    </GridItem>
                    <GridItem xs = {1} sm = {1} md = {1} lg = {1}>
                        <Button handleSubmit = {this.props.handleSubmit}>Send</Button>
                    </GridItem>
                </GridContainer>
            </footer>
        );
    }
}

export default withStyles(customInputStyle)(Message);