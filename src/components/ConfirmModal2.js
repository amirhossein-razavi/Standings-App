import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import sarb from '../assets/images/giphy.gif.crdownload';

class ConfirmModal2 extends Component {
  // eslint-disable-next-line class-methods-use-this
  submitHandle(teams, winnerTeam2, winnerTeam3, hideModal, changeModal) {
    if (teams.length === 4) {
      winnerTeam2();
      hideModal();
    } else {
      winnerTeam3();
      changeModal('ChampionModal');
    }
  }

  render() {
    const { teams, winnerTeam2, winnerTeam3, changeModal, hideModal, modal } = this.props;
    return (
      <div>
        <Modal isOpen={modal === 'ConfirmModal2'} toggle={hideModal}>
          <ModalHeader toggle={() => { changeModal('ChampionModal'); }}>Awesome!!&ensp;&ensp;you win??</ModalHeader>
          <ModalBody>
            <img src={sarb} alt="" style={{ marginLeft: `${130}px` }} />
            <br />
            <Button
              color="success"
              className="confirmButton"
              onClick={() => { this.submitHandle(teams, winnerTeam2, winnerTeam3, hideModal, changeModal); }}
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
