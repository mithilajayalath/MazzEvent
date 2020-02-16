import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';
import SignUpVehicles from '../../Components/Auth/RegisterVehiclesModal';

const SignUpCustomer = props => (
    <tr>
        <td>{props.signupcustomer.signup_firstName}</td>
        <td>{props.signupcustomer.signup_lastName}</td>
        <td>{props.signupcustomer.signup_email}</td>
        <td>{props.signupcustomer.signup_number}</td>
        <td>{props.signupcustomer.signup_address}</td>
        <td>{props.signupcustomer.signup_address2}</td>
        <td>{props.signupcustomer.signup_city}</td>
        <td>{props.signupcustomer.signup_state}</td>
        <td>{props.signupcustomer.signup_zip}</td>
        <td>
            <Link to={"/staff/editserviceprovider/"+props.signupcustomer._id}>Edit</Link>
        </td>
    </tr>
)

export default class StaffCatering extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    UserList() {
        return this.state.users.map(function(currentSignUpCustomer, i){
            if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Vehicles"){
            return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
            }
            return null;
        })
    }

    render() {

        
        return (
            <div>
                <LeftStaff/>
                <div className="right">
                    <Upper/>

                    <div>
                    <h3>List of Our Service Providers</h3>
                        <table className="table table-striped" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Address</th>
                                    <th>Second Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                { this.UserList() }
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th><SignUpVehicles/></th>
                                
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>   
        )
    }
}


