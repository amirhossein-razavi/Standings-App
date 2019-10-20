import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import sarb from '../assets/images/giphy_2.gif';
import { NavLink } from 'react-router-dom';


class ChampionModal extends Component {

    submitHandle() {
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
                <Modal isOpen={this.props.modal === "ChampionModal"} toggle={this.props.hideModal}>
                    <ModalHeader toggle={this.props.hideModal}>{`${this.props.winnerTeam.title} is the Champion`}</ModalHeader>
                    <ModalBody>
                        <img src={sarb} alt="" style={{ marginLeft: 47 + 'px' }} width="360px" height="300px"></img>
                        <div>
                            <Button color="primary" className="ChampionButton2" onClick={() => { this.submitHandle2() }}>
                                <span className="fa fa-chevron-left fa-1x"></span>
                                Back To Tournament
                                </Button>
                            <NavLink className="nav-link" to="./">
                                <Button color="success" className="ChampionButton" onClick={() => { this.submitHandle() }}>Back To Menu</Button>
                            </NavLink>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default (ChampionModal);


