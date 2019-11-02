import React, { Component } from 'react';
import { addTeamsD, winTeam, changeTitle, saveTitle, hideModal, changeModal, winnerTeam, winnerTeam2, winnerTeam3 } from '../../redux/ActionCreators';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import TeamsNumberD from './TeamsNumberD';
import TeamsTitleD from './TeamsTitleD';
import ConfirmModal from '../ConfirmModal';
import ConfirmModal2 from '../ConfirmModal2';
// import ConfirmModal2C6 from './ConfirmModal2-6';
// import ChampionModal from './ChampionModal';
import TeamD from './TeamD';

const mapStateToProps = state => {
    return {
        state: state.dec,
        clubs: state.dec.Ddata,
        nextTeam: state.dec.nextTeam,
        nextTeam2: state.dec.nextTeam2,
        nextTeam3: state.dec.nextTeam3,
        nextTeam4: state.dec.nextTeam4,
        nextTeam5: state.dec.nextTeam5,
        nextTeamD: state.dec.nextTeamD,
        nextTeam2D: state.dec.nextTeam2D,
        championteam: state.dec.fake,
        modal: state.modal.modal,
        DfinalData: state.dec.DfinalData
    }
}

const mapDispatchToProps = dispatch => ({
    addTeamsD: (title) => dispatch(addTeamsD(title)),
    winTeam: (item, index) => dispatch(winTeam(item, index)),
    changeTitle: (team, title) => dispatch(changeTitle(team, title)),
    saveTitle: (e) => dispatch(saveTitle(e)),
    hideModal: () => dispatch(hideModal()),
    changeModal: (modal) => dispatch(changeModal(modal)),
    winnerTeam: () => dispatch(winnerTeam()),
    winnerTeam2: () => dispatch(winnerTeam2()),
    winnerTeam3: () => dispatch(winnerTeam3()),
});


class Dec extends Component {
    constructor(props) {
        super(props);
        this.handleClick4 = this.handleClick4.bind(this);
        // this.handleClick6 = this.handleClick6.bind(this);
    }


    handleClick4(item) {
        console.log("sarb : ", this.props.nextTeam);
        this.props.winTeam(item);
        this.props.changeModal("ConfirmModal2");
    }

    // handleClick6(item) {
    //     console.log("sarb : ", this.props.nextTeam);
    //     this.props.winTeam(item);
    //     this.props.changeModal("ConfirmModal2C6");
    // }

    render() {
        console.log("sarb : ", this.props.DfinalData.length);
        console.log("sarb2 : ", this.props.clubs.length);
        console.log("sarb3 : ", this.props.state);
        return (
            <div className={this.props.DfinalData.length === 6 ? "tournamentStyle" : "tournamentStyle2"}>

                {this.props.DfinalData.length &&
                    < div className="backMenu">
                        <NavLink className="nav-link" to="./">
                            <Button color='primary' outline>
                                <span className="fa fa-chevron-left fa-1x"></span>
                                Back To Menu
                                </Button>
                        </NavLink>

                        <h1 className="textStyle2">Tournament Chart</h1>
                    </div>}

                <TeamsNumberD
                    addTeamsD={this.props.addTeamsD}
                    teams={this.props.DfinalData}
                />

                <TeamsTitleD
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
                    winnerTeam3={this.props.winnerTeam3}
                    hideModal={this.props.hideModal}
                    modal={this.props.modal}
                    changeModal={this.props.changeModal}
                    teams={this.props.DfinalData}
                />

                {/* <ConfirmModal2C6
                    winnerTeam2={this.props.winnerTeam2}
                    hideModal={this.props.hideModal}
                    modal={this.props.modal}
                />

                <ChampionModal
                    modal={this.props.modal}
                    championteam={this.props.championteam}
                    hideModal={this.props.hideModal}
                /> */}


                {/* {!this.props.routePage &&
                    <div className="startTournamentback" onClick={() => { this.props.changeModal("teamsNumber") }}>
                        <div className="startTournament"></div>
                        <div className="startTournament1"></div>
                        <div className="startTournament2"></div>
                        <div className="startTournament3"></div>
                        <div className="startTournament4"></div>

                    </div>} */}



                <div className="row1">
                    {this.props.DfinalData && this.props.DfinalData.map((club, index) => (
                        <TeamD
                            key={club.id}
                            club={{ ...club }}
                            index={index}
                            winTeam={this.props.winTeam}
                            changeModal={this.props.changeModal}
                        />
                    ))}
                </div>


                {/* 4 teams tournomant       */}

                {this.props.DfinalData.length === 4 &&
                    <>
                        <div className="row2-1">
                            <div className="row2-1">
                                <div>
                                    <div className="line7-4D">
                                    </div>
                                </div>
                                <div>
                                    <div className="line7-4-1D">
                                    </div>
                                </div>
                            </div>
                            <div className="row2-1">
                                <div className="row2-1">
                                    <div>
                                        <div className='position4-4D' href='#' onClick={() => this.handleClick4(this.props.nextTeam)}> {this.props.nextTeam.title} </div>
                                    </div>
                                    <div>
                                        <div className='position4-4-1D' href='#' onClick={() => this.handleClick4(this.props.nextTeam2)}> {this.props.nextTeam2.title} </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row2-1">
                                <div>
                                    <div className="line4-4">
                                    </div>
                                </div>
                                <div>
                                    <div className="line8-4D">
                                    </div>
                                </div>
                            </div>

                            <div className="row2-1">
                                <div>
                                    <div className="line6-4">
                                    </div>
                                </div>
                            </div>

                            <div className="row2-1">
                                <div className="row2-1">
                                    <div className='position5-4D'>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row2-1C">
                            <div className="row2-1D">
                                <div className="row2-1D">
                                    <div>
                                        <div className='position1-4D' href='#'> {this.props.nextTeamD.title} </div>
                                    </div>
                                    <div>
                                        <div className='position1-4-1D' href='#'>  {this.props.nextTeam2D.title} </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row2-1D">
                                <div>
                                    <div className="line1-4D">
                                    </div>
                                </div>
                                <div>
                                    <div className="line2-4D">
                                    </div>
                                </div>
                            </div>

                            <div className="row2-1D">
                                <div>
                                    <div className="line3-4D">
                                    </div>
                                </div>
                            </div>

                            <div className="row2-1D">
                                <div className="row2-1D">
                                    <div>
                                        <div className='position2-4D'>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='position2-4D'>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row2-1D">
                                <div>
                                    <div className="line4-4D">
                                    </div>
                                </div>
                                <div>
                                    <div className="line5-4D">
                                    </div>
                                </div>
                            </div>
                            <div className="row2-1D">
                                <div>
                                    <div className="line6-4D">
                                    </div>
                                </div>
                            </div>
                            <div className="row2-1D">
                                <div className="row2-1D">
                                    <div className='position3-4D'>
                                        <div></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </>

                }



                {/* 6 teams tournomant */}

                {
                    this.props.DfinalData.length === 6 &&
                    <div className="mainRow">
                        <div className="row2">
                            <div className="extra">
                                <div className="row2-1">
                                    <div className="line3">
                                    </div>
                                </div>
                                <div className="row2-1">
                                    <div className='position2' href='#' onClick={() => this.handleClick6(this.props.nextTeam)}> {this.props.nextTeam.title} </div>
                                </div>
                                <div className="row2-1">
                                    <div className="line4">
                                    </div>
                                </div>


                            </div>
                            <div className="extra">

                                <div className="row2-1">
                                    <div className="line3-1">
                                    </div>
                                </div>
                                <div className="row2-1">
                                    <div className='position2-1' href='#' onClick={() => this.handleClick6(this.props.nextTeam2)}> {this.props.nextTeam2.title} </div>
                                </div>
                                <div className="row2-1">
                                    <div className="line5">
                                    </div>
                                </div>


                            </div>
                            <div className="extra">
                                <div className="row2-1">
                                    <div className="line3-2">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row3">
                            <div className="extra2">
                                <div className="row2-1">
                                    <div className="line6">
                                    </div>
                                </div>
                                <div className="row2-1">
                                    <div className='position3' href='#' onClick={() => this.handleClick4(this.props.nextTeam3)}> {this.props.nextTeam3.title} </div>
                                </div>
                                <div className="row2-1">
                                    <div className="line8">
                                    </div>
                                </div>
                            </div>
                            <div className="extra2">
                                <div className="row2-1">
                                    <div className="line7">
                                    </div>
                                </div>
                                <div className="row2-1">
                                    <div className='position2-2' href='#' onClick={() => this.handleClick4(this.props.nextTeam4)}> {this.props.nextTeam4.title} </div>
                                </div>
                                <div>
                                    <div className="line5">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row4">
                            <div className="extra3">
                                <div className="row2-1">
                                    <div className="line6">
                                    </div>
                                </div>
                                <div className="row2-1">
                                    <div className='position3'> {this.props.nextTeam5.title} </div>
                                </div>
                            </div>
                        </div>


                    </div>
                }


            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dec);