import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home.component";
import LogIn from "./Pages/LogIn.component";
import AboutUs from "./Pages/AboutUs.component";
import SignUp from "./Pages/SignUp.component";
import StaffDash from "./Pages/StaffDash.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        {/*home Routes*/}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/aboutus" component={AboutUs} />
        {/*login Routes*/}
          <Route path="/signup" component={SignUp} />
          <Route path="/staffdashboard" component={StaffDash} />
        </div>
      </Router>
    );
  }
}

export default App;