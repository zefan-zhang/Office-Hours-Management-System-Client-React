import React from "react";
import UserService from "../services/UserService";

export default class ProfileComponent extends React.Component {
    state = {
        currentUser: {
            username: "",
            firstName: "",
            lastName: ""
        },
        editing: false
    };

    componentDidMount() {
        UserService.getCurrentUser()
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

    edit = (state) => this.setState({editing: state});

    render() {
        return (
            <div className="container">

                <h1 className="text-center">Profile</h1>
                <span className="float-right fixed-top">
                Hi {this.state.currentUser.username}!
                <button className='btn btn-danger btn-sm'
                        onClick={this.logout}>
                    Logout
                </button>
                    </span>
                <form>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label>Your role</label>
                            <input type="text"
                                   className="form-control"
                                   readOnly='readOnly'
                                   placeholder="contact system administration to set up your role"
                                   value={this.state.currentUser.role}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Username</label>
                            <input type="text"
                                   className="form-control"
                                   readOnly='readOnly'
                                   value={this.state.currentUser.username}/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="password">password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.password}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text"
                                   className="form-control"
                                   id="firstName"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.firstName}
                                   required/>


                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text"
                                   className="form-control"
                                   id="lastName"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.lastName}
                                   required/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.email}
                                   required/>


                        </div>
                        {
                            this.state.currentUser.role === "Professor" &&
                            <div className="col-md-6 mb-3">
                                <label htmlFor="office">Office</label>
                                <input type="text"
                                       className="form-control"
                                       id="office"
                                       readOnly={!this.state.editing}
                                       value={this.state.currentUser.office}
                                       required/>
                            </div>
                        }

                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="street1">Street 1</label>
                            <input type="text"
                                   className="form-control"
                                   id="street1"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.street1}
                                   required/>


                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="street2">Street 2</label>
                            <input type="text"
                                   className="form-control"
                                   id="street2"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.street2}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city">City</label>
                            <input type="text"
                                   className="form-control"
                                   id="city"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.city}
                                   required/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="state">State</label>
                            <select className="custom-select"
                                    id="state"
                                    disabled={!this.state.editing}
                                    value={this.state.currentUser.state}
                                    required>
                                <option selected disabled value="">Choose...</option>
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Massachusetts</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>Nevada</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania</option>
                                <option>Rhode Island</option>
                                <option>South Carolina</option>
                                <option>South Dakota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virginia</option>
                                <option>Washington</option>
                                <option>West Virginia</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text"
                                   className="form-control"
                                   readOnly={!this.state.editing}
                                   value={this.state.currentUser.zip}
                                   id="zip"
                                   required/>
                        </div>
                    </div>
                    {
                        !this.state.editing &&
                        <button className="btn btn-primary float-right"
                                onClick={() => this.edit(true)}>
                            Edit
                        </button>
                    }
                    {
                        this.state.editing &&
                        <button className="btn btn-success float-right"
                                onClick={() => this.edit(false)}>
                            Update
                        </button>

                    }


                </form>

            </div>
        )
    }

}
