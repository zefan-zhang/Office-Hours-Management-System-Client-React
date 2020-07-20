import React from "react";

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
            <div>
                <h1>Login</h1>
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
                <button onClick={this.login}>
                    Login
                </button>
            </div>
        )
    }

}
