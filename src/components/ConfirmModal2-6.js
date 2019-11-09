import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import sarb from '../assets/images/giphy.gif.crdownload';


class ConfirmModal2C6 extends Component {
  submitHandle() {
    this.props.winnerTeam2();
    this.props.hideModal();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal === 'ConfirmModal2C6'} toggle={this.props.hideModal}>
          <ModalHeader toggle={this.props.hideModal}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
            <img src={sarb} className="gif2-6" alt="" />
            <br />
            <Button color="success" className="confirmButton" onClick={() => { this.submitHandle(); }}>Sure</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ConfirmModal2C6);
