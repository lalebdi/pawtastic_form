import React, { Component } from 'react'
import FormUserDetails from './FormPetDetails'
import FormPersonalDetails from './FormDemoDetails';
import Confirm from './Confirm';
import Success from './Success'


export class UserForm extends Component {
    state ={  //the input will be saved here
        step: 1, // by default
        fullName: '',
        petName: '',
        email:'',
        gender:'',
        breed: '',
        fixed:''

    }

    // Proceed to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }
    // Back step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    };

    render() {
        const { step }= this.state;
        const { fullName, petName , email , gender, breed, fixed} = this.state;
        const values = { fullName, petName , email , gender, breed, fixed }
        
        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                );
            case 2:
                return <FormPersonalDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    prevStep= {this.prevStep}
                        />;
            case 3:
                return <Confirm
                    nextStep = {this.nextStep}
                    // handleChange = {this.handleChange} because there's no input!!
                    values = {values}
                    prevStep= {this.prevStep}
                        />;
            case 4:
                return <Success />
        }
    }
}

export default UserForm
