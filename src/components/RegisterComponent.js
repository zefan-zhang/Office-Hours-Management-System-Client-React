import React from "react";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

export default class RegisterComponent extends React.Component {

    state = {
        user: {
            username: "",
            password: "",
            verifyPassword: ""
        },
        error: null,
    };

    register = () => {
        if (this.state.user.verifyPassword === this.state.user.password
            && this.state.user.username.length > 0
            && this.state.user.password > 0) {
            UserService.createUser(this.state.user)
                .catch(e => {
                    this.setState(
                        {
                            error: "username already exist"
                        })
                })
                .then(user => {
                    if (user) {
                        this.props.history.push("/profile")
                    }
                });
        } else if (this.state.user.verifyPassword !== this.state.user.password) {
            this.setState(
                {
                    error: "password doesn't match"
                })
        } else if (this.state.user.password === 0 || this.state.user.username === 0) {
            this.setState(
                {
                    error: "all the fields must fill"
                })
        }

    };

    closeAlert = () => this.setState({error: null});

    render() {
        return (
            <div className='container mt-5'>
                <h1 className='text-center'>Create your account</h1>
                {
                    this.state.error &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {this.state.error}
                        <button onClick={this.closeAlert}
                                type="button" className="close" data-dismiss="alert"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <div className="form-group row">
                    <div className="col-sm-2">
                        <label htmlFore="username">
                            Username
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className='form-control'
                            placeholder="username"
                            id="username"
                            value={this.state.user.username}
                            onChange={(e) => {
                                const username = e.target.value;
                                this.setState(prevState => ({
                                    user: {
                                        ...prevState.user,
                                        username: username
                                    }
                                }))
                            }
                            }/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">
                        <label htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className='form-control'
                            placeholder="password"
                            id="password"
                            type="password"
                            value={this.state.user.password}
                            onChange={(e) => {
                                const password = e.target.value;
                                this.setState(prevState => ({
                                    user: {
                                        ...prevState.user,
                                        password: password
                                    }
                                }))
                            }
                            }/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">
                        <label htmlFor="verifyPassword">
                            Verify Password
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className='form-control'
                            placeholder="validate password"
                            type="password"
                            id="verifyPassword"
                            value={this.state.user.verifyPassword}
                            onChange={(e) => {
                                const verifyPassword = e.target.value;
                                this.setState(prevState => ({
                                    user: {
                                        ...prevState.user,
                                        verifyPassword: verifyPassword
                                    }
                                }))
                            }
                            }/>
                    </div>
                </div>

                <div className="row">
                    <span className="col-sm-2"/>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block"
                                type="submit"
                                onClick={this.register}>
                            Register
                        </button>
                        <div className="row">
                            <div className="col-sm-6 mt-3">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <Link to="/" className="float-right">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
