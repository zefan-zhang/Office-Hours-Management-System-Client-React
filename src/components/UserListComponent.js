import React from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

export default class UserListComponent extends React.Component {
    state = {
        users: [],
        currentUser: {role: "Admin"}
    };

    componentDidMount() {
        UserService.getAllUsers()
            .then(allUsers => this.setState({users: allUsers}))
    }

    render() {
        return (
            <div>
                <h1>All users</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Username</th>
                        {
                            this.state.currentUser.role === "Admin" &&
                            <th>Password</th>
                        }

                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td>
                            <input
                                className="form-control"
                                placeholder="Username"/>
                        </td>
                        {
                            this.state.currentUser.role === "Admin" &&
                            <td>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"/>
                            </td>
                        }

                        <td>
                            <input
                                className="form-control"
                                placeholder="First Name"/>
                        </td>
                        <td>
                            <input
                                className="form-control"
                                placeholder="Last Name"/>
                        </td>
                        <td><select className="form-control">
                            <option value="Professor">Professor</option>
                            <option value="Student">Student</option>
                            <option value="TA">TA</option>
                            {
                                this.state.currentUser.role === "Admin" &&
                                    <option value="Admin">Admin</option>

                            }
                            {
                                this.state.currentUser.role === "Admin" &&
                                <option value="Undefined">Undefined</option>

                            }
                        </select>
                        </td>
                        <td>
                            <span className="float-right">
                             <button className="btn fa-2x fa fa-search"/>
                                {
                                    this.state.currentUser.role === "Admin" &&
                                    <button className="btn fa-2x fa fa-plus"/>
                                }
                                {
                                    this.state.currentUser.role === "Admin" &&
                                    <button className="btn fa-2x fa fa-check"/>
                                }
                            </span>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td><Link to="/profile/">{user.username}</Link></td>
                                    {
                                        this.state.currentUser.role === "Admin" &&
                                        <td >{user.password}</td>
                                    }

                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.role}</td>
                                    <td className="wbdv-actions">
                                        {
                                            this.state.currentUser.role === "Admin" &&
                                            <span className="float-right">
                                                <button className="btn fa-2x fa fa-times"/>
                                                <button className="btn fa-2x fa fa-edit"/>
                                            </span>
                                        }

                                    </td>
                                </tr>)
                    }
                    </tbody>
                </table>

            </div>
        )
    }

}
