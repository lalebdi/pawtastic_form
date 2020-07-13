import React, { Component } from 'react';
// Will user Material UI below
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => { // calls nextStep in the UserForm. this is done by props
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values , handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Pet's Details" />
                    <TextField
                    hintText = "Enter Your Full Name"
                    floatingLabelText = "Full Name"
                    onChange= {handleChange('fullName')}
                    defaultValue = {values.fullName}
                    />
                    <br/>
                    <TextField
                    hintText = "Enter Your Pet's Name"
                    floatingLabelText = "Pet's Name"
                    onChange= {handleChange('petName')}
                    defaultValue = {values.petName}
                    />
                    <br/>
                    <TextField
                    hintText = "Enter Your Email"
                    floatingLabelText = "Email"
                    onChange= {handleChange('email')}
                    defaultValue = {values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}   
                        onClick ={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = { 
    button:{
        margin: 15
    }

}

export default FormUserDetails
