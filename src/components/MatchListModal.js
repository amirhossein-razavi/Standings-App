import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input } from 'reactstrap';


class matchListModal extends Component {
  constructor(props) {
    super(props);

    this.submitHandle = this.submitHandle.bind(this);
  }

  submitHandle() {
    this.props.hideModal();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal === 'matchList'} toggle={this.props.hideModal} className="modal-lg">
          <ModalHeader toggle={this.props.hideModal}>Edit Team</ModalHeader>
          <Form onSubmit={() => { this.submitHandle(); }}>
            <ModalBody>

              {this.props.matchData && this.props.matchData.map((item) => (

                <div>
                  <FormGroup row key={item.id}>
                    <Label for="update" md={2}>
                      {item.title}
                    </Label>
                    <Col md={4}>
                      <Input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Enter User Name"
                      />
                    </Col>
                    <Col md={4}>
                      <Input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Enter Team Name"
                      />
                    </Col>
                    <Label for="update" md={2}>
                      {item.title}
                    </Label>
                  </FormGroup>
                </div>
              ))}

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
export default (matchListModal);
