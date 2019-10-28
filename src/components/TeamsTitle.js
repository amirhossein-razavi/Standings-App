import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input } from 'reactstrap';


class TeamsTitle extends Component {
  constructor(props) {
    super(props);

    this.submitHandle = this.submitHandle.bind(this);

  }

  submitHandle(e) {
    this.props.hideModal();
    this.props.saveTitle(e);
  }




  render() {

    return (
      <div>
        <Modal isOpen={this.props.modal === "openTitleModal"} toggle={this.props.hideModal} className="modal-lg" >
          <ModalHeader toggle={this.props.hideModal}>Edit Team</ModalHeader>
          <Form onSubmit={e => { this.submitHandle(e) }}>
            <ModalBody>

              {this.props.teams && this.props.teams.map((item, index) => {
                return (
                  
                  <div>
                    <FormGroup row key={item.id}>
                      <Label for="update" md={2}> User Name :</Label>
                      <Col md={4} >
                        <Input
                          type="text"
                          name="title"
                          className="input"
                          placeholder='Enter User Name'
                          onChange={e => this.props.changeUsername(item, e.target.value)}
                        />
                      </Col>
                      <Label for="update" md={2}> Team Name :</Label>
                      <Col md={4} >
                        <Input
                          type="text"
                          name="title"
                          className="input"
                          placeholder='Enter Team Name'
                          onChange={e => this.props.changeTitle(item, e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                  </div>
                )

              })}

            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Edit</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default (TeamsTitle);


