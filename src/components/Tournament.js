import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { addTeamsT, winTeam, changeTitle, saveTitle, hideModal, changeModal, winnerTeam, winnerTeam2, winnerTeam3 } from '../redux/ActionCreators';
import TeamsNumberT from './TeamsNumberT';
import TeamsTitleT from './TeamsTitleT';
import ConfirmModal from './ConfirmModal';
import ConfirmModal2 from './ConfirmModal2';
import ConfirmModal2C6 from './ConfirmModal2-6';
import ChampionModal from './ChampionModal';
import TeamT from './TeamT';


const mapStateToProps = (state) => ({
  clubs: state.tournament.Tdata,
  routePage: state.tournament.routePage,
  nextTeam: state.tournament.nextTeam,
  nextTeam2: state.tournament.nextTeam2,
  nextTeam3: state.tournament.nextTeam3,
  nextTeam4: state.tournament.nextTeam4,
  nextTeam5: state.tournament.nextTeam5,
  championteam: state.tournament.fake,
  modal: state.modal.modal,
  TfinalData: state.tournament.TfinalData,
});

const mapDispatchToProps = (dispatch) => ({
  addTeamsT: (title) => dispatch(addTeamsT(title)),
  winTeam: (item, index) => dispatch(winTeam(item, index)),
  changeTitle: (team, title) => dispatch(changeTitle(team, title)),
  saveTitle: (e) => dispatch(saveTitle(e)),
  hideModal: () => dispatch(hideModal()),
  changeModal: (modal) => dispatch(changeModal(modal)),
  winnerTeam: () => dispatch(winnerTeam()),
  winnerTeam2: () => dispatch(winnerTeam2()),
  winnerTeam3: () => dispatch(winnerTeam3()),
});


class Tournament extends Component {
  constructor(props) {
    super(props);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
  }


  handleClick4(item) {
    this.props.winTeam(item);
    this.props.changeModal('ConfirmModal2');
  }

  handleClick6(item) {
    this.props.winTeam(item);
    this.props.changeModal('ConfirmModal2C6');
  }

  render() {
    return (
      <div className={this.props.TfinalData.length === 6 ? 'tournamentStyle' : 'tournamentStyle2'}>

        {this.props.TfinalData.length
          && (
            <div className="backMenu">
              <NavLink className="nav-link" to="./">
                <Button color="primary" outline>
                  <span className="fa fa-chevron-left fa-1x" />
                  Back To Menu
                </Button>
              </NavLink>

              <h1 className="textStyle2">Tournament Chart</h1>
            </div>
          )}

        <TeamsNumberT
          addTeamsT={this.props.addTeamsT}
          modal={this.props.modal}
          hideModal={this.props.hideModal}
          teams={this.props.TfinalData}
        />
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
          winnerTeam3={this.props.winnerTeam3}
          hideModal={this.props.hideModal}
          modal={this.props.modal}
          changeModal={this.props.changeModal}
          teamsT={this.props.TfinalData}
        />

        <ConfirmModal2C6
          winnerTeam2={this.props.winnerTeam2}
          hideModal={this.props.hideModal}
          modal={this.props.modal}
        />

        <ChampionModal
          modal={this.props.modal}
          championteam={this.props.championteam}
          hideModal={this.props.hideModal}
        />


        {/* {!this.props.routePage &&
                    <div className="startTournamentback" onClick={() => { this.props.changeModal("teamsNumber") }}>
                        <div className="startTournament"></div>
                        <div className="startTournament1"></div>
                        <div className="startTournament2"></div>
                        <div className="startTournament3"></div>
                        <div className="startTournament4"></div>

                    </div>} */}


        <div className="row1">
          {this.props.TfinalData && this.props.TfinalData.map((club, index) => (
            <TeamT
              key={club.id}
              club={{ ...club }}
              index={index}
              winTeam={this.props.winTeam}
              changeModal={this.props.changeModal}
            />
          ))}
        </div>


        {/* 4 teams tournomant       */}

        {this.props.TfinalData.length === 4
          && (
            <div className="row2-1">
              <div className="row2-1">
                <div>
                  <div className="line3-4" />
                </div>
                <div>
                  <div className="line3-4-1" />
                </div>
              </div>
              <div className="row2-1">
                <div className="row2-1">
                  <div>
                    <button type="button" className="position2-4" href="#" onClick={() => this.handleClick4(this.props.nextTeam)}>
                      {this.props.nextTeam.title}
                    </button>
                  </div>
                  <div>
                    <button type="button" className="position2-4-1" href="#" onClick={() => this.handleClick4(this.props.nextTeam2)}>
                      {this.props.nextTeam2.title}
                    </button>
                  </div>
                </div>
              </div>
              <div className="row2-1">
                <div>
                  <div className="line4-4" />
                </div>
                <div>
                  <div className="line5-4" />
                </div>
              </div>

              <div className="row2-1">
                <div>
                  <div className="line6-4" />
                </div>
              </div>

              <div className="row2-1">
                <div className="row2-1">
                  <div className="position3-4">
                    <div>
                      {this.props.nextTeam3.title}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          )}


        {/* 6 teams tournomant */}

        {
          this.props.TfinalData.length === 6
          && (
            <div className="mainRow">
              <div className="row2">
                <div className="extra">
                  <div className="row2-1">
                    <div className="line3" />
                  </div>
                  <div className="row2-1">
                    <button type="button" className="position2" href="#" onClick={() => this.handleClick6(this.props.nextTeam)}>
                      {this.props.nextTeam.title}
                    </button>
                  </div>
                  <div className="row2-1">
                    <div className="line4" />
                  </div>


                </div>
                <div className="extra">

                  <div className="row2-1">
                    <div className="line3-1" />
                  </div>
                  <div className="row2-1">
                    <button type="button" className="position2-1" href="#" onClick={() => this.handleClick6(this.props.nextTeam2)}>
                      {this.props.nextTeam2.title}
                    </button>
                  </div>
                  <div className="row2-1">
                    <div className="line5" />
                  </div>


                </div>
                <div className="extra">
                  <div className="row2-1">
                    <div className="line3-2" />
                  </div>

                </div>
              </div>

              <div className="row3">
                <div className="extra2">
                  <div className="row2-1">
                    <div className="line6" />
                  </div>
                  <div className="row2-1">
                    <button type="button" className="position3" href="#" onClick={() => this.handleClick4(this.props.nextTeam3)}>
                      {this.props.nextTeam3.title}
                    </button>
                  </div>
                  <div className="row2-1">
                    <div className="line8" />
                  </div>
                </div>
                <div className="extra2">
                  <div className="row2-1">
                    <div className="line7" />
                  </div>
                  <div className="row2-1">
                    <button type="button" className="position2-2" href="#" onClick={() => this.handleClick4(this.props.nextTeam4)}>
                      {this.props.nextTeam4.title}
                    </button>
                  </div>
                  <div>
                    <div className="line5" />
                  </div>
                </div>
              </div>

              <div className="row4">
                <div className="extra3">
                  <div className="row2-1">
                    <div className="line6" />
                  </div>
                  <div className="row2-1">
                    <div className="position3">
                      {' '}
                      {this.props.nextTeam5.title}
                      {' '}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          )
        }


      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
