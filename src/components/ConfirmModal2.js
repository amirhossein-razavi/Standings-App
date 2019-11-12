import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import gif from '../assets/images/giphy.gif.crdownload';

class ConfirmModal2 extends Component {
  submitHandle() {
    if (this.props.teams && this.props.teams.length === 4) {
      this.props.winnerTeam2();
      this.props.hideModal();
    } else if (this.props.teamsT) {
      this.props.winnerTeam2();
      this.props.hideModal();
      this.props.changeModal('ChampionModal');
    } else if (this.props.teams && this.props.teams.length === 6) {
      this.props.winnerTeam3();
      this.props.changeModal('ChampionModal');
    }
  }

  render() {
    const { changeModal, hideModal, modal } = this.props;
    return (
      <div>
        <Modal isOpen={modal === 'ConfirmModal2'} toggle={hideModal}>
          <ModalHeader toggle={() => { changeModal('ChampionModal'); }}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
            <img src={gif} alt="" style={{ marginLeft: `${130}px` }} />
            <br />
            <Button
              color="success"
              className="confirmButton"
              onClick={() => { this.submitHandle(); }}
            >
              {'Sure'}
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ConfirmModal2);
