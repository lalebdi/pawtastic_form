import React, { Component } from 'react';
// Will user Material UI below
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    continue = e => { // calls nextStep in the UserForm. this is done by props
        e.preventDefault();
        this.props.nextStep();
    }
    // the back , we use the prevStep
    back = e => { // calls nextStep in the UserForm. this is done by props
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values , handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Pet's Demographic Details" />
                    <TextField
                    hintText = "Female or Male"
                    floatingLabelText = "Gender"
                    onChange= {handleChange('gender')}
                    defaultValue = {values.gender}
                    />
                    <br/>
                    <TextField
                    hintText = "Breed"
                    floatingLabelText = "Breed"
                    onChange= {handleChange('breed')}
                    defaultValue = {values.breed}
                    />
                    <br/>
                    <TextField
                    hintText = "Spayed , Neutered or none"
                    floatingLabelText = "Fixed"
                    onChange= {handleChange('fixed')}
                    defaultValue = {values.fixed}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue" // Will use the continue function above
                        primary={true}
                        style={styles.button}   
                        onClick ={this.continue}
                    />
                    <RaisedButton
                        label="Back" // Will use the back function above
                        primary={false}
                        style={styles.button}   
                        onClick ={this.back}
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

export default FormPersonalDetails
