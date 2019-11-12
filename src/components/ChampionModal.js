import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import gif from '../assets/images/giphy_2.gif';


class ChampionModal extends Component {
  // eslint-disable-next-line class-methods-use-this
  staticsubmitHandle() {
    setInterval(() => {
      window.location.reload();
    }, 100);
  }

  submitHandle2() {
    this.props.hideModal();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal === 'ChampionModal'} toggle={this.props.hideModal}>
          <ModalHeader toggle={this.props.hideModal}>{`${this.props.championteam.title} is the Champion`}</ModalHeader>
          <ModalBody>
            <img src={gif} alt="" className="gifC" width="360px" height="300px" />
            <div>
              <Button color="primary" className="ChampionButton2" onClick={() => { this.submitHandle2(); }}>
                <span className="fa fa-chevron-left fa-1x" />
                Back To Tournament
              </Button>
              <NavLink className="nav-link" to="./">
                <Button color="success" className="ChampionButton" onClick={() => { this.submitHandle(); }}>Back To Menu</Button>
              </NavLink>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default (ChampionModal);
