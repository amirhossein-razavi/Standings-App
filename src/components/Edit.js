import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input } from 'reactstrap';


class EditModal extends Component {
  constructor(props) {
    super(props);

    this.submitHandle = this.submitHandle.bind(this);
  }

  submitHandle(e) {
    this.props.updateTeam(e);
    this.props.hideModal();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal === 'openModal'} toggle={this.props.hideModal}>
          <ModalHeader toggle={this.props.hideModal}>Edit Team</ModalHeader>
          <Form onSubmit={(e) => { this.submitHandle(e); }}>
            <ModalBody>
              <FormGroup row>
                <Label for="update" md={4}> Team Name </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="title"
                    className="input"
                    placeholder={this.props.selectedTeam.title}
                    onChange={(e) => this.props.changeSelected('title', e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="update" md={4}> Username </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="title"
                    className="input"
                    placeholder={this.props.selectedTeam.username}
                    onChange={(e) => this.props.changeSelected('username', e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="update" md={4}> GF </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="GF"
                    className="input"
                    placeholder="0"
                    onChange={(e) => this.props.changeSelected('GF', e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="update" md={4}> GA </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="GA"
                    className="input"
                    placeholder="0"
                    onChange={(e) => this.props.changeSelected('GA', e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="update" md={4}> Pts </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="Pts"
                    className="input"
                    placeholder="0"
                    onChange={(e) => this.props.changeSelected('Pts', e.target.value)}
                  />
                </Col>
              </FormGroup>
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
export default (EditModal);
