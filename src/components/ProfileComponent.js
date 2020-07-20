import React from "react";

export default class ProfileComponent extends React.Component {
    state = {
        currentUser: {
            username: "",
            firstName: "",
            lastName: ""
        }
    };

    componentDidMount() {
        fetch(`http://localhost:8080/api/profile`, {
            method: "POST",
            credentials: "include"
        }).then(response => response.json())
            .catch(e => {
                this.props.history.push("/")
            })
            .then(currentUser => {
                if (currentUser) {
                    this.setState(
                        {
                            currentUser: currentUser
                        })
                }
            })
    }

    logout = () =>
        fetch(`http://localhost:8080/api/logout`, {
            method: "POST",
            credentials: "include"
        }).then(response => this.props.history.push("/"));

    render() {
        return (
            <div>
                <h1>Profile</h1>
                Hi {this.state.currentUser.username}!
                <button onClick={this.logout}>
                    Logout
                </button>
            </div>
        )
    }

}
