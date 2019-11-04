import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import sarb from '../assets/images/giphy.gif.crdownload';


class ConfirmModal3 extends Component {

  submitHandle() {
    if (this.props.nextTeam5D.title && this.props.nextTeam3.title) {
      this.props.changeModal('ChampionModal');
    }
    else {
      this.props.winnerTeam3();
      this.props.hideModal();
    }
  }

  render() {

    return (
      <div>
        <Modal isOpen={this.props.modal === "ConfirmModal3"} toggle={this.props.hideModal}>
          <ModalHeader toggle={this.props.hideModal}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
            <img src={sarb} alt="" style={{ marginLeft: 130 + 'px' }}></img>
            <br></br>
            <Button color="success" className="confirmButton" onClick={() => { this.submitHandle() }}>Sure</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ConfirmModal3);


