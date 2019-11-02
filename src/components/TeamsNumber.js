import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Label, Row } from 'reactstrap';
import { Control, LocalForm , Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const isNumber = (val) => !isNaN(Number(val));

const openModal = (isModalOpen , teams) => {
  if(isModalOpen && teams.length === 0){
    return true;
  }
  return false;
}


class TeamsNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.submitHandle = this.submitHandle.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  submitHandle(valeus) {
    this.toggleModal();
    this.props.addTeams(valeus.title);
  }

  render() {
    return (
      <div>
        <Modal isOpen={openModal(this.state.isModalOpen , this.props.teams)}>
          <ModalHeader>Add Team</ModalHeader>
          <ModalBody>

            <LocalForm onSubmit={(values) => this.submitHandle(values)}>
              <Row className="form-group">
                <Col md={12}>
                  <Label htmlFor="title" md={12}><h5>Enter the number of teams</h5></Label>
                  <Control.text model=".title" id="title" name="title" md={12}
                    className="form-control"
                    placeholder="example: 4"
                    validators={{
                      required , maxLength: maxLength(2), isNumber
                  }}
                   />
              <Errors
                  className="text-danger"
                  model=".title"
                  show="touched"
                  messages={{
                      required: ' * Required',
                      maxLength: ' * Must be 2 numbers or less',
                      isNumber: ' * Must be a number'
                  }}
               />

                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 12 }}>
                  <Button type="submit" color="primary">
                    Add
                   </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (TeamsNumber);


