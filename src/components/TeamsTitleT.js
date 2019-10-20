import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input, FormFeedback } from 'reactstrap';
import { timingSafeEqual } from 'crypto';




class TeamsTitleT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: false,
      error: '',
      firsterror: 'error'
    };

    this.submitHandle = this.submitHandle.bind(this);
    this.hanleChange = this.hanleChange.bind(this);
  }

  submitHandle(e) {
    this.props.hideModal();
    this.props.saveTitle(e);
  }

  hanleChange(index, value, team) {
    this.props.changeTitle(index, value);

    if (team.title.length === 0) {
      this.setState({
        error: "required",
      })
    }
    else {
      this.setState({
        error: "",
        // firsterror: ''  
      })
    }

    console.log("title : ", this.state.title)
  }

  // handleBlur =  (evt) => {
  //   // console.log(1);
  //   this.setState({
  //     title: true 
  //   });
  // }


  // validate(title) {

  //   const errors = {
  //     title: '',
  //   };

  //   if (this.props.modal === "openTitleModal" && title[1].length < 3) {
  //     console.log("if : if is working");
  //     errors.title = 'required';
  //   }

  //   else {
  //     errors.title = '';
  //   };

  //   console.log("errors : ", errors.title);

  //   return errors;

  // }





  render() {
    // const title = this.props.teams.map((team) => {
    //   return team.title
    // })
    // const errors = this.validate(title);
    // console.log("error : ", errors.title);
    // console.log("title : ", title)

    const isValid = (item) => {
      if (item.changed) {
        if (item.title) {
          console.log("changed : ", item.changed)
          return true;
        }
        else return false;
      }
      else return true;
    };

    const change = this.props.teams.map((team) => {
      if(team.changed === true){
        return true
      }
      else return false
      })



    return (
      <div>
        <Modal isOpen={this.props.modal === "openTitleModal"}>
          <ModalHeader>Teams Title</ModalHeader>
          <Form onSubmit={(e) => this.submitHandle(e)}>
            <ModalBody>

              {this.props.teams && this.props.teams.map((item, index) => {
                return (

                  <div>
                    <FormGroup row key={item.id}>
                      <Label for="update" md={4}> Team Name :</Label>
                      <Col md={8} >
                        <Input
                          type="text"
                          name="title"
                          className="input"
                          placeholder='Enter Team Name'
                          valid={isValid(item)}
                          invalid={!isValid(item)}
                          // onBlur={isValid(item)}
                          onChange={e => this.hanleChange(index, e.target.value, item)}
                        />
                        <FormFeedback>Required</FormFeedback>
                      </Col>
                    </FormGroup>
                  </div>
                )
              })}

            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" disabled={change}>Save</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default (TeamsTitleT);






