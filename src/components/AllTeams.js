import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';

import Team from './Team';
import TeamsNumber from './TeamsNumber';
import EditModal from './Edit';
import TeamsTitle from './TeamsTitle';
import MatchListModal from './MatchListModal';

import { addTeams, deleteTeam, editTeam, updateTeam, changeSelected, hideModal, changeTitle, changeUsername, saveTitle, addTeam, matchList } from '../redux/ActionCreators';

const mapStateToProps = (state) => ({
  teams: state.teams.data,
  modal: state.modal.modal,
  selectedTeam: state.teams.selectedTeam,
  matchData: state.teams.matchData,
});

const mapDispatchToProps = (dispatch) => ({
  addTeams: (title) => dispatch(addTeams(title)),
  deleteTeam: (id) => dispatch(deleteTeam(id)),
  updateTeam: (e) => dispatch(updateTeam(e)),
  editTeam: (team) => dispatch(editTeam(team)),
  changeSelected: (prop, value) => dispatch(changeSelected(prop, value)),
  hideModal: () => dispatch(hideModal()),
  changeTitle: (team, title) => dispatch(changeTitle(team, title)),
  changeUsername: (team, username) => dispatch(changeUsername(team, username)),
  saveTitle: (e) => dispatch(saveTitle(e)),
  addTeam: () => dispatch(addTeam()),
  matchList: () => dispatch(matchList()),
});

const pageHeight = {
  height: window.innerHeight,
};

const AllTeams = (props) => (
  <div>
    <div id="standings" style={pageHeight}>
      <div>
        <h1 className="textStyle">League Standings</h1>
      </div>
      <div className="container box" col="col-md-12">

        <NavLink className="nav-link" to="/Start">
          <Button className="buttonStyle">
            <span className="fa fa-chevron-left fa-sm" />
            back to menu
          </Button>
        </NavLink>
        <Button className="buttonStyle2" onClick={props.matchList}>
          <span className="fa fa-bars fa-sm" />
          Match List
        </Button>


        <TeamsNumber
          addTeams={props.addTeams}
          hideModal={props.hideModal}
          addTeam={props.addTeam}
          teams={props.teams}

        />
        <EditModal
          updateTeam={props.updateTeam}
          teams={props.teams}
          changeSelected={props.changeSelected}
          modal={props.modal}
          hideModal={props.hideModal}
          selectedTeam={props.selectedTeam}
        />

        <TeamsTitle
          // updateTeam={props.updateTeam}
          teams={props.teams}
          // changeSelected={props.changeSelected}
          modal={props.modal}
          hideModal={props.hideModal}
          changeTitle={props.changeTitle}
          changeUsername={props.changeUsername}
          saveTitle={props.saveTitle}
        // selectedTeam={props.selectedTeam}
        />

        <MatchListModal
          teams={props.teams}
          modal={props.modal}
          hideModal={props.hideModal}
          matchData={props.matchData}
        />

        <div className="row">

          <div className="col-md-12">
            <table className="table">
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

                {props.teams && sortBy(props.teams, ['Pts', 'GD', 'GA']).map((item, index) => (
                  <Team
                    key={item.id}
                    item={{ ...item, index }}
                    teams={props.teams}
                    deleteTeam={props.deleteTeam}
                    editTeam={props.editTeam}
                  />
                )).reverse()}

              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(AllTeams);
