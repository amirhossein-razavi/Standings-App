import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import gif from '../assets/images/giphy.gif.crdownload';


class ConfirmModal3 extends Component {
  submitHandle() {
    if (this.props.nextTeam5D.title && this.props.nextTeam3.title) {
      this.props.changeModal('ChampionModal');
    } else {
      this.props.winnerTeam3();
      this.props.hideModal();
    }
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal === 'ConfirmModal3'} toggle={this.props.hideModal}>
          <ModalHeader toggle={this.props.hideModal}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
            <img src={gif} alt="" className="gif" />
            <br />
            <Button color="success" className="confirmButton" onClick={() => { this.submitHandle(); }}>Sure</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ConfirmModal3);
