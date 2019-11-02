import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Label, Row, Input, Form, FormGroup } from 'reactstrap';

const openModal = (isModalOpen , teams) => {
  if(isModalOpen && teams.length === 0){
    return true;
  }
  return false;
}

class TeamsNumberD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true ,
      TeamsNumber : 4
    };

    this.submitHandle = this.submitHandle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  submitHandle(TeamsNumber , e) {
    this.toggleModal();
    this.props.addTeamsD(TeamsNumber);
    e.preventDefault();
  }

  onChangeHandle(e){
    this.setState({
      TeamsNumber : e.target.value
    })
  }


  render() {

    return (
      <div>
        <Modal isOpen={openModal(this.state.isModalOpen , this.props.teams)}>
          <ModalHeader>Add Team</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => {this.submitHandle(this.state.TeamsNumber , e)}}>
              <FormGroup>
                <Row className="form-group">
                  <Col md={12}>
                    <Label md={12}><h5>Enter the number of teams</h5></Label>
                    <Input type="select" onChange= {(e) => {this.onChangeHandle(e)}}>
                      <option>4</option>
                      <option>6</option>
                      </Input>

                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 12 }}>
                    <Button type="submit" color="primary">
                      Add
                   </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (TeamsNumberD);


