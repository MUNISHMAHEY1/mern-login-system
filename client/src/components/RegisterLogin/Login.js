import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: []
    };


    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            email: this.state.email,
            password: this.state.password
        };

        if(this.isFormValid(this.state)){
            this.setState({ errors : [] })
            this.props.dispatch(loginUser(dataToSubmit))
                .then(response => { 
                    if(response.payload.loginSuccess){
                        this.props.history.push('/')
                    } else {
                        this.setState({
                            errors: this.state.errors.concat(
                                "Failed to login. Please check the credentials!"
                            )
                        })
                    }
                })
        } else {
            this.setState({
                errors: this.state.errors.concat("Form is not Valid ")
            })
        }
    }

    isFormValid = ({ email, password }) => email && password;

    render() {
        return (
            <div className="container">
                <h2>Log In</h2>
                <div className="row">
                    <form className="col s12" >
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
                                    data-error="Type a Right email"
                                    data-success="verified"></span>
                            </div>    
                        </div>

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
                        
                        {this.state.errors.length > 0 && (
                            <div style={{ color: "red", fontSize: "1.5rem"}}>
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
                                    Log In
                                </button>
                            </div>

                            <div className="col 6">
                                <Link to="/register">
                                    <button
                                        className="btn waves-effect red lighten-1"
                                        type="submit"
                                        name="action">
                                        Sign up
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

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login);