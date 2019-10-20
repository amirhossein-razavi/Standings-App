import React, { Component } from 'react';
import { addTeams, winTeam, winTeam2, changeTitle, saveTitle, hideModal, changeModal, winnerTeam, winnerTeam2 } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import TeamsNumberT from './TeamsNumberT';
import TeamsTitleT from './TeamsTitleT';
import ConfirmModal from './ConfirmModal';
import ConfirmModal2 from './ConfirmModal2';
import ChampionModal from './ChampionModal';
import TeamT from './TeamT';


const mapStateToProps = state => {
    return {
        clubs: state.tournament.Tdata,
        nextTeam: state.tournament.nextTeam,
        nextTeam2: state.tournament.nextTeam2,
        nextTeam3: state.tournament.nextTeam3,
        modal: state.modal.modal,
    }
}

const mapDispatchToProps = dispatch => ({
    addTeams: (title) => dispatch(addTeams(title)),
    winTeam: (item, index) => dispatch(winTeam(item, index)),
    winTeam2: (item) => dispatch(winTeam2(item)),
    changeTitle: (index, title) => dispatch(changeTitle(index, title)),
    saveTitle: (e) => dispatch(saveTitle(e)),
    hideModal: () => dispatch(hideModal()),
    changeModal: (modal) => dispatch(changeModal(modal)),
    winnerTeam: () => dispatch(winnerTeam()),
    winnerTeam2: () => dispatch(winnerTeam2()),
});



class Tournament extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(item) {
        // if(this.props.nextTeam.length){
        console.log("sarb : ", this.props.nextTeam);
        this.props.winTeam(item);
        this.props.changeModal("ConfirmModal2");
        // }
    }


    render() {
        return (
            <div className="tournament">

                <div className="backMenu">
                    <NavLink className="nav-link" to="./">
                        <Button color='primary' outline>
                            <span className="fa fa-chevron-left fa-1x"></span>
                            Back To Menu
                                </Button>
                    </NavLink>
                    
                    <h1 className="textStyle2">Tournament Chart</h1>
                </div>

                <TeamsNumberT
                    addTeams={this.props.addTeams}
                    modal={this.props.modal}
                    hideModal={this.props.hideModal} />
                <TeamsTitleT
                    modal={this.props.modal}
                    changeTitle={this.props.changeTitle}
                    saveTitle={this.props.saveTitle}
                    teams={this.props.clubs}
                    hideModal={this.props.hideModal}
                />

                <ConfirmModal
                    winnerTeam={this.props.winnerTeam}
                    hideModal={this.props.hideModal}
                    modal={this.props.modal}
                />

                <ConfirmModal2
                    winnerTeam2={this.props.winnerTeam2}
                    hideModal={this.props.hideModal}
                    modal={this.props.modal}
                    changeModal={this.props.changeModal}
                />
                <ChampionModal
                    modal={this.props.modal}
                    winnerTeam={this.props.nextTeam3}
                    hideModal={this.props.hideModal}
                />


                {this.props.clubs.length === 0 &&
                    <div className="startTournamentback" onClick={() => { this.props.changeModal("teamsNumber") }}>
                        <div className="startTournament"></div>
                        <div className="startTournament1"></div>
                        <div className="startTournament2"></div>
                        <div className="startTournament3"></div>
                        <div className="startTournament4"></div>

                    </div>}



                <div className="row1">
                    {this.props.clubs && this.props.clubs.map((club, index) => (
                        <TeamT
                            key={club.id}
                            club={{ ...club, index }}
                            winTeam={this.props.winTeam}
                            changeModal={this.props.changeModal}
                        />
                    ))}
                </div>

                {this.props.clubs.length &&
                    <div className="row2">
                        <div className="row2">
                            <div>
                                <div className="line3">
                                </div>
                            </div>
                            <div>
                                <div className="line3-1">
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="row2">
                                <div>
                                    <div className='position2' href='#' onClick={() => this.handleClick(this.props.nextTeam)}> {this.props.nextTeam.title} </div>
                                </div>
                                <div>
                                    <div className='position2-1' href='#' onClick={() => this.handleClick(this.props.nextTeam2)}> {this.props.nextTeam2.title} </div>
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div>
                                <div className="line4">
                                </div>
                            </div>
                            <div>
                                <div className="line5">
                                </div>
                            </div>
                        </div>

                        <div className="row2">
                            <div>
                                <div className="line6">
                                </div>
                            </div>
                        </div>

                        <div className="row2">
                            <div className="row2">
                                <div className='position3'>
                                    <div> {this.props.nextTeam3.title} </div>
                                </div>
                            </div>
                        </div>


                    </div>}


            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);