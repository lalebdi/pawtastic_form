import React, { Component } from 'react';
// Will user Material UI below
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
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
        const { values : {fullName, petName , email , gender , breed , fixed} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Pet's Data" />
                    <List>
                        <ListItem
                        primaryText="Full Name"
                        secondaryText={ fullName} />
                        <ListItem
                        primaryText="Pet's Name"
                        secondaryText={ petName} />
                        <ListItem
                        primaryText="Email"
                        secondaryText={ email} />
                        <ListItem
                        primaryText="Gender"
                        secondaryText={ gender} />
                        <ListItem
                        primaryText="Breed"
                        secondaryText={ breed} />
                        <ListItem
                        primaryText="Fixed"
                        secondaryText={ fixed} />
                    </List>
                    <br/>
                    <RaisedButton
                        label="COnfirm & Continue"
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

export default Confirm
