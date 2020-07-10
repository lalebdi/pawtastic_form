import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super();

        this.setState = {
            name: '',
            breed: '',
            birthday: '',
            formCompleted: false
        }

    }

    onNameChange = (e) =>{
        this.setState ({
            name: e.target.value
        })
    }

    onBreedChange = (e) => {
        this.setState ({
            breed: e.target.value
        })
    }

    onBirthdayChange = (e) => {
        this.setState ({
            birthday: e.target.value
        })
    }

    handleFOrmSubmission = (e) => {
        e.preventDefault();
        this.setState ({
            formCompleted : true
        })

    }

    render() {
        return (
            <div>
                <h2> Yay, we love dogs! Give us the basics about your pup</h2>
                <form className="reg-form"></form>
                <label> Name </label>
                <input  
                type="text"
                placeholder="Pet's name"
                value={this.state.name}
                onChange={this.onNameChange}
                />
                <label> Breed </label>
                <input  
                type="text"
                placeholder="Pet's breed"
                value={this.state.breed}
                onChange={this.onBreedChange}
                />
                <label> Birthday </label>
                <input  
                type="date"
                placeholder="MM/DD/YYYY"
                value={this.state.birthday}
                onChange={this.onBreedChange}
                />
                <button type="submit" onClick = {this.handleFormSubmission}>
            submit
          </button>
          {this.state.formCompleted === true 
            ? alert("Thank you for filling the registration form </br> We will contact you soon")
          : null}
            </div>
        )
    }
}

export default Form


