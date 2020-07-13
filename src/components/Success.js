import React, { Component } from 'react';
// Will use Material UI below
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    continue = e => { // calls nextStep in the UserForm. this is done by props
        e.preventDefault();
        // Here you can send the data to the API
        this.props.nextStep();
    }
    // the back , we use the prevStep
    back = e => { // calls nextStep in the UserForm. this is done by props
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank You For Your Submission</h1>
                    <p> You will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
