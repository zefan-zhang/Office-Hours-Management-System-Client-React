import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import LoginComponent from "./LoginComponent";
import UserListComponent from "./UserListComponent";

export default class OfficeHoursManagementComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path="/"
                        exact={true}
                        component={HomeComponent}/>

                    <Route
                        path="/register"
                        exact={true}
                        component={RegisterComponent}/>

                    <Route
                        path="/profile"
                        exact={true}
                        component={ProfileComponent}/>

                    <Route
                        path="/login"
                        exact={true}
                        component={LoginComponent}/>
                    <Route
                        path="/users"
                        exact={true}
                        component={UserListComponent}
                    />
                </div>

            </BrowserRouter>
        )
    }

}
