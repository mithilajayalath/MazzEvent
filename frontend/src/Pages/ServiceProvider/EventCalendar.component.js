import React, { Component, Modal } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

export default class ServiceProviderEventCalendar extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            date: null,
            unavailableDates:[],
            loading:true
            
        }
    }

    componentDidMount(){
        this.getUnavailableDates();

    }

    getUnavailableDates=()=>{
        console.log("----------------dedde")
        var token = localStorage.getItem('id');
        axios.get('http://localhost:4000/mazzevents/'+token)
        .then(response => {
            console.log(response.data.profile_data.UnavailableDates)
            

            this.setUnavailableDates(response.data.profile_data.UnavailableDates)
        })
    }

    setUnavailableDates=(dates)=>{
        dates.map(date=>{
           
            this.state.unavailableDates.push({
                id:dates.indexOf(date),
                title: 'Unavailable', // a property!
                start: date, // a property!
                allDay: true,
                color: 'red'// a property! ** see important note below about 'end' **
                
            })
                console.log(this.state.unavailableDates)
        })

        this.setState({
            loading:false
        })

        console.log(this.state.unavailableDates)
        
    }

    openDateModal = () => {
        this.setState({
            visible: true
        });
    }

    closeDateModal = () => {
        this.setState({
            visible: false,

        });
    }


    dateClick = (date) => {
        console.log('-----------------------')
        // console.log(Date.now())
        // console.log(date.dateStr)

        if (new Date(date.dateStr).getTime() >= Date.now()) {
            //console.log(date)
            this.openDateModal();
        }

        this.setState({
            date: date.dateStr

        })

        //  alert('Clicked on: ' + this.state.date)        
    }

    addUnavailableDates = () => {

        // e.preventDefault();

        const dateobj = {
            date: this.state.date,
        };
        const headers = {
            'Content-Type': 'application/json'
        }

        var token = localStorage.getItem('id');
        console.log(dateobj);

        axios.post('http://localhost:4000/mazzevents/' + token, { date: this.state.date }, { headers: headers })
            .then(response => {

                console.log(response.data.profile_data.UnavailableDates.length)
              console.log(response.data.profile_data.UnavailableDates[response.data.profile_data.UnavailableDates.length-1])
                this.closeDateModal();
                window.location.reload();

                })

    }

    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="right">
                <Upper/>
                <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin, interactionPlugin]}
                        // themeSystem={{bootstrap}}
                        header={{
                            left: "prev,next today",
                            center: "title",
                        }}
                        events={this.state.unavailableDates}
                        dateClick={this.dateClick}
                        defaultAllDayEventDuration={{'days':1}}
                    />

                    <Modal visible={this.state.visible} width="25%" height="20%" effect="fadeInUp" onClickAway={() => this.closeDateModal()}>
                        <h5 align="center">Change availabilty on {this.state.date}</h5>
                        <center>
                            {/* <Button variant="btn btn-danger" type="submit" onClick={() => this.logout()}>LogOut</Button> */}
                            <input type="button" class="btn btn-danger" value="Unavailable" onClick={() => this.addUnavailableDates()} />
                            <input type="button" class="btn btn-info" value="Cancel" onClick={() => this.closeDateModal()} />
                        </center>
                    </Modal>
                </div>
            </div>   
        )
    }
}