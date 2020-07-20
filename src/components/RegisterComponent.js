import React from "react";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {

    state = {
        user: {
            username: "",
            password: "",
            verifyPassword: ""
        },
        error: null
    };

    register = () =>
        fetch(`http://localhost:8080/api/register`, {
            method: 'POST',
            body: JSON.stringify(this.state.user),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.setState(
                    {
                        error: "Unable to register"
                    })
            })
            .then(user => {
                if (user) {
                    this.props.history.push("/profile")
                }

            });

    render() {
        return (
            <div>
                <h1>Register</h1>
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error}
                    </div>
                }
                <input
                    placeholder="username"
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
                <br/>
                <input
                    placeholder="password"
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
                <br/>
                <input
                    placeholder="validate password"
                    type="password"
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
                <br/>
                <button onClick={this.register}>
                    Register
                </button>
                <Link to="/login">Sign in</Link>
            </div>
        )
    }

}
