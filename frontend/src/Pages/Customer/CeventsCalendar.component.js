import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";


export default class CeventsCalender extends Component {
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                This is LeftCustomer - Events Calender
                    
                </div>
            </div>   
        )
    }
}