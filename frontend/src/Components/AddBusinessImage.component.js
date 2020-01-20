import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';

class AddBusinessImage extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            businessImg: '',
            upload: ''
        }
    }

    toggle = () => {
        //Clear messages
        this.setState({
          modal: !this.state.modal,
          businessImg: '',
          upload: ''
        });
    };

    onFileChange(e) {
        this.setState({ businessImg: e.target.files[0] })
        
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('businessImg', this.state.businessImg)
        axios.post("http://localhost:4000/mazzevents/addbusinessimg/"+this.props.id, formData, {
        }).then(res => {
            console.log(res)
        })
        this.setState({ upload: 1 })
    }


    render() {
        return (
<div>
<Button className="btn btn-dark" onClick={this.toggle} href="#">
                Update the profile Picture
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Select a Picture</ModalHeader>
          <ModalBody>
          <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <Label for="avatar">Choose a profile picture</Label>
                            <Input className="btn btn-dark" type="file" id="avatar" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <Button className="btn btn-dark" disabled={!this.state.businessImg || this.state.upload===1} type="submit">Upload</Button>
                            <div className="float-right">
                            <Button className="btn btn-dark" disabled={!this.state.businessImg || !this.state.upload} href="/serviceprovider/addservices">Save</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </ModalBody>
          </Modal>
          </div>          
        )
    }
}

const mapStateToProps = state => ({
    id: state.auth.id,
    fName: state.auth.fName,
    lName: state.auth.lName,
    email: state.auth.email,
    number: state.auth.number
});

export default connect(mapStateToProps,null)(AddBusinessImage);