import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import sarb from '../assets/images/giphy.gif.crdownload';


class ConfirmModal3 extends Component {

  submitHandle() {
    if(this.props.teams.length === 4){
    this.props.winnerTeam3();
    this.props.hideModal();
    }
    else{
      this.props.winnerTeam3();
      this.props.changeModal("ChampionModal");
      }
  }

  render() {

    return (
      <div>
        <Modal isOpen={this.props.modal === "ConfirmModal3"} >
        <ModalHeader>Awesome!!&ensp;&ensp;you win??</ModalHeader>
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
export default (ConfirmModal3);


