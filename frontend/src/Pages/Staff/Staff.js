import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StaffAccount from "./Account.component";
import StaffChat from "./Chat.component";
import StaffMailbox from "./Mailbox.component";
import StaffEventCalendar from "./EventCalendar.component";
import StaffCharts from "./Charts.component";
import StaffSendNotification from "./SendNotification.component";
import StaffServiceProvider from "./ServiceProvider.component";
import StaffCustomer from "./Customer.component";
import StaffCustomerReviews from "./CustomerReviews.component";
import StaffAuthentication from "./Authentication.component";
import StaffMaps from "./Maps.component";
import EditServiceProvider from "./EditServiceProvider.component";

export default class Staff extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/staff/account" component={StaffAccount}/>
                    <Route path="/staff/chat" component={StaffChat}/>
                    <Route path="/staff/mailbox" component={StaffMailbox}/>
                    <Route path="/staff/eventcalendar" component={StaffEventCalendar}/>
                    <Route path="/staff/charts" component={StaffCharts}/>
                    <Route path="/staff/sendnotification" component={StaffSendNotification}/>
                    <Route path="/staff/serviceprovider" component={StaffServiceProvider}/>
                    <Route path="/staff/customer" component={StaffCustomer}/>
                    <Route path="/staff/customerreviews" component={StaffCustomerReviews}/>
                    <Route path="/staff/authentication" component={StaffAuthentication}/>
                    <Route path="/staff/maps" component={StaffMaps}/>
                    <Route path="/staff/editserviceprovider/:id" component={EditServiceProvider} />
                </Router>
            </div>
        )
    }
}