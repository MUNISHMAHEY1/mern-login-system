import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user_actions';

class Register extends Component {

    state = {
        name:"",
        lastname:"",
        email: "",
        password: "",
        passwordConfirmation:"",
        errors: []
    };

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    isFormValid = () => {
        let errors = [];    
        let error;

        if(this.isFormEmpty(this.state)){
            error = { message : "Fill in all Fields"};
            this.setState({ errors : errors.concat(error) });
        } else if(!this.isPasswordValid(this.state)) {
            error = { message: "Password is invalid" }
            this.setState({ errors : errors.concat(error) });
        } else {
            return true;
        }
    }

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if(password.length < 6 || passwordConfirmation.length < 6){
            return false;
        } else if( password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    isFormEmpty = ({lastname, name, email, password, passwordConfirmation}) => {
        return (
            !name.length || 
            !lastname.length ||
            !email.length ||
            !password.length ||
            !passwordConfirmation.length
        );
    }

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            name: this.state.name,
            lastname: this.state.lastname,
            email:this.state.email,
            password:this.state.password,
            passwordConfirmation:this.state.passwordConfirmation
        }

        console.log(dataToSubmit);

        if(this.isFormValid()){
            this.setState({ errors: [] })
            this.props.dispatch(registerUser(dataToSubmit))
                .then(response => {
                    console.log(response)
                    if(response.payload.success){
                        this.props.history.push('/login');
                    } else {
                        this.setState({ 
                            errors : this.state.errors.concat("Problem in registration. Try again!")
                        })
                    }
                })
                .catch(err => {
                    this.setState({
                        errors: this.state.errors.concat(err)
                    })
                })
        } else {
            this.setState({
                errors: this.state.errors.concat("Form is not Valid")
            })
        }
    }
    render() {
        return (
            <div className="container">
                <h4>Personal Details</h4>
                <div className="row">
                    <form className="col s12" >
                        <div className="row">
                            <div className="input-field col s10">
                                <input
                                    name="name"
                                    value={this.state.name}
                                    onChange={e => this.handleChange(e)}
                                    id="name"
                                    type="text"
                                    className="validate"
                                ></input>
                                <label className="active" htmlFor="name">Name</label>
                                <span 
                                    className="helper-text"
                                    data-error="Type a Right email"
                                    data-success="verified"></span>
                            </div>    
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input
                                    name="lastname"
                                    value={this.state.lastname}
                                    onChange={e => this.handleChange(e)}
                                    id="lastname"
                                    type="text"
                                    className="validate"
                                ></input>
                                <label className="active" htmlFor="lastname">Lastname</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong"
                                    data-success="verified"></span>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s10">
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                ></input>
                                <label className="active" htmlFor="email">Email</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong"
                                    data-success="verified"></span>
                            </div>
                        </div>

                        <h4>Password Verification</h4>

                        <div className="row">
                            <div className="input-field col s10">
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    className="validate"
                                ></input>
                                <label className="active" htmlFor="password">Password</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong"
                                    data-success="verified"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <input
                                    name="passwordConfirmation"
                                    value={this.state.passwordConfirmation}
                                    onChange={e => this.handleChange(e)}
                                    id="passwordConfirmation"
                                    type="password"
                                    className="validate"
                                ></input>
                                <label className="active" htmlFor="passwordConfirmation">password Confirmation</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong"
                                    data-success="verified"></span>
                            </div>
                        </div>

                        {this.state.errors.length > 0 && (
                            <div  style={{ color: "red", fontSize: "1.5rem"}}>
                                {this.state.errors.map((err, index) => (
                                    <p key={index}>{err}</p>
                                ))}
                            </div>
                        )}

                        <div className="row">
                            <div className="col 6">
                                <button
                                    className="btn waves-effect red lighten-1"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}
                                    >
                                    Create an Account
                                </button>
                            </div>

                            <div className="col 6">
                                <Link to="/login">
                                    <button
                                        className="btn waves-effect red lighten-1"
                                        type="submit"
                                        name="action">
                                        Go to Login
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Register);
