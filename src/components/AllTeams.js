import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import Team from './Team';
import TeamsNumber from './TeamsNumber';
import EditModal from './Edit';
import TeamsTitle from './TeamsTitle';
import sortBy from "lodash/sortBy";
import { connect } from 'react-redux';
import { addTeams, deleteTeam, editTeam, updateTeam, changeSelected, hideModal, sarbconsole, changeTitle, changeUsername, saveTitle, addTeam } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    teams: state.teams.data,
    modal: state.modal.modal,
    selectedTeam: state.teams.selectedTeam
  }
}

const mapDispatchToProps = dispatch => ({
  addTeams: (title) => dispatch(addTeams(title)),
  deleteTeam: (id) => dispatch(deleteTeam(id)),
  updateTeam: (e) => dispatch(updateTeam(e)),
  editTeam: (team) => dispatch(editTeam(team)),
  changeSelected: (prop, value) => dispatch(changeSelected(prop, value)),
  hideModal: () => dispatch(hideModal()),
  sarbconsole: (sarb) => dispatch(sarbconsole(sarb)),
  changeTitle: (index, title) => dispatch(changeTitle(index, title)),
  changeUsername: (index, username) => dispatch(changeUsername(index, username)),
  saveTitle: (e) => dispatch(saveTitle(e)),
  addTeam: () => dispatch(addTeam()),
});


class AllTeams extends Component {

  render() {

    return (
      <div>
        <div id="standings">
          <div>
            <h1 className="textStyle">League Standings</h1>
          </div>
          <div className="container box" col="col-md-12">

            <NavLink className="nav-link" to='/Start'>
              <Button className="buttonStyle"><span className="fa fa-chevron-left fa-sm"></span> back to menu</Button>
            </NavLink>
            <Button className="buttonStyle2" onClick={this.props.addTeam}><span className="fa fa-plus fa-sm"></span> Add Team</Button>

           
            <TeamsNumber addTeams={this.props.addTeams} hideModal={this.props.hideModal} addTeam={this.props.addTeam} />
            <EditModal
              updateTeam={this.props.updateTeam}
              teams={this.props.teams}
              changeSelected={this.props.changeSelected}
              modal={this.props.modal}
              hideModal={this.props.hideModal}
              sarbconsole={this.props.sarbconsole}
              selectedTeam={this.props.selectedTeam}
            />

            <TeamsTitle
              // updateTeam={this.props.updateTeam}
              teams={this.props.teams}
              // changeSelected={this.props.changeSelected}
              modal={this.props.modal}
              hideModal={this.props.hideModal}
              changeTitle={this.props.changeTitle}
              changeUsername={this.props.changeUsername}
              saveTitle={this.props.saveTitle}
            // sarbconsole={this.props.sarbconsole}
            // selectedTeam={this.props.selectedTeam}
            />

            <div className="row">

              <div className="col-md-12">
                <table className="table" >
                  <thead id="theadStyle">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">GF</th>
                      <th scope="col">GA</th>
                      <th scope="col">GD</th>
                      <th scope="col">Pts </th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>

                  <tbody>

                    {this.props.teams && sortBy(this.props.teams, ['Pts', 'GD', 'GA']).map((item, index) => (
                      <Team key={item.id}
                        item={{ ...item, index }}
                        teams={this.props.teams}
                        deleteTeam={this.props.deleteTeam}
                        editTeam={this.props.editTeam} />
                    )).reverse()}





                  </tbody>




                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllTeams);

