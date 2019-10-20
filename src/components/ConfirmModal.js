import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import sarb from '../assets/images/giphy.gif.crdownload';


class ConfirmModal extends Component {

  submitHandle() {
    this.props.winnerTeam();
    this.props.hideModal();
  }

  render() {

    return (
      <div>
        <Modal isOpen={this.props.modal === "ConfirmModal"} toggle={this.props.hideModal} >
          <ModalHeader toggle={this.props.hideModal}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
            <div style={{width: 100+'%'}}>
          <img src={sarb }alt="" style={{marginLeft: 130+'px'}}></img>
          </div>
          <Button color="success" className="confirmButton" onClick={() => {this.submitHandle()}}>Sure</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ConfirmModal);


