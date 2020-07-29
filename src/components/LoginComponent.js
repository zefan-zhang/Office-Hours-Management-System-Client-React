import React from "react";
import {Link} from "react-router-dom";

export default class LoginComponent extends React.Component {
    state = {
        user: {
            username: "",
            password: "",
        }
    };

    login = () =>
        fetch(`http://localhost:8080/api/login`, {
            method: 'POST',
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.props.history.push("/login")
            })
            .then(user => {
                if (user) {
                    this.props.history.push("/profile")
                }
            });

    render() {
        return (
            <div className="container mt-5">
                <h2 className="text-center m-3">Welcome</h2>
                <div className="form-group row">
                    <div className="col-sm-2">
                        <label for="username">
                        Username
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            placeholder="username"
                            id = "username"
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
                            className="form-control"
                            placeholder="password"
                            type="password"
                            id = "password"
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

                <div className="row">
                    <span className="col-sm-2"/>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block"
                                onClick={this.login}>
                            Login
                        </button>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <h6>Back to homepage? <Link to="/">Cancel</Link></h6>
                    <h6>Don't have an account? <Link to="/register">Register</Link></h6>
                </div>
            </div>
        )
    }

}
