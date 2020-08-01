import React from "react";

export default class HomeComponent extends React.Component{
    render() {
        return (
            <div>
                <h1>Office Hour Management System</h1>
                <a href="/register">
                    Register
                </a>
                <br/>
                <a href="/profile">
                    Profile
                </a>
                <br/>
                <a href="/login">
                    Login
                </a>
                <br/>
                <a href="/users">
                    Users
                </a>


            </div>
        )
    }
}
