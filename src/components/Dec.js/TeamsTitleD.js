import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input, FormFeedback } from 'reactstrap';
import _ from 'lodash';

const isValid = (item) => {
  if (item.changed) {
    if (item.title) {
      return true;
    }
    return false;
  }
  return true;
};

const isAllValid = (teams) => {
  // approach 1
  const result = _.every(teams, (item) => item.changed && isValid(item));
  return result;

  // // approach 2
  // const result = true;

  // teams.forEach((item) => {
  //   if (!isValid(item)) {
  //     result = false;
  //   }
  // });

  // return result;
};

class TeamsTitleD extends Component {
  constructor(props) {
    super(props);

    this.submitHandle = this.submitHandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandle(e) {
    this.props.hideModal();
    this.props.saveTitle(e);
  }

  handleChange(value, team) {
    this.props.changeTitle(team, value);
  }


  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal === 'openTitleModal'}>
          <ModalHeader>Teams Title</ModalHeader>
          <Form onSubmit={(e) => this.submitHandle(e)}>
            <ModalBody>

              {this.props.teams && this.props.teams.map((item) => (
                <div>
                  <FormGroup row key={item.id}>
                    <Label for="update" md={4}> Team Name :</Label>
                    <Col md={8}>
                      <Input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Enter Team Name"
                        value={item.title}
                        valid={isValid(item)}
                        invalid={!isValid(item)}
                        onChange={(e) => this.handleChange(e.target.value, item)}
                      />
                      <FormFeedback>Required</FormFeedback>
                    </Col>
                  </FormGroup>
                </div>
              ))}

            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" disabled={!isAllValid(this.props.teams)}>Save</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default (TeamsTitleD);
