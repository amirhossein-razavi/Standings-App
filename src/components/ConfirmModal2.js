import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import sarb from '../assets/images/giphy.gif.crdownload';


class ConfirmModal2 extends Component {

  submitHandle() {
    this.props.winnerTeam2();
    // this.props.hideModal();
    this.props.changeModal("ChampionModal");
  }

  render() {

    return (
      <div>
        <Modal isOpen={this.props.modal === "ConfirmModal2"} toggle={() => {this.props.changeModal("ChampionModal")}} >
        <ModalHeader toggle={() => {this.props.changeModal("ChampionModal")}}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
          <img src={sarb }alt="" style={{marginLeft: 130+'px'}}></img>
          <br></br>
          <Button color="success" className="confirmButton" onClick={() => {this.submitHandle()}}>Sure</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ConfirmModal2);


