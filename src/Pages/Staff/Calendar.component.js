import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const StaffCalendar = () => {
  return (
    <MDBContainer>
      <MDBListGroup style={{ width: "22rem" }}>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
};

export default StaffCalendar;