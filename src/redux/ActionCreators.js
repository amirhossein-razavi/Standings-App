import * as ActionTypes from './ActionTypes';

export const addTeams = (title) => ({
  type: ActionTypes.ADD_TEAMS,
  payload: Number(title),
});

export const addTeamsT = (title) => ({
  type: ActionTypes.ADD_TEAMS_T,
  payload: Number(title),
});

export const addTeamsD = (title) => ({
  type: ActionTypes.ADD_TEAMS_D,
  payload: Number(title),
});

export const deleteTeam = (id) => ({
  type: ActionTypes.DELETE_TEAM,
  payload: Number(id),
});

export const updateTeam = (e) => ({
  type: ActionTypes.UPDATE_TEAM,
  payload: e,
});

export const editTeam = (team) => ({
  type: ActionTypes.EDIT_TEAM,
  payload: team,
});


export const changeSelected = (prop, value) => ({
  type: ActionTypes.CHANGE_SELECTED,
  payload: { prop, value },
});

export const hideModal = () => ({
  type: ActionTypes.HIDE_MODAL,
});

export const changeTitle = (team, title) => ({
  type: ActionTypes.CHANGE_TITLE,
  payload: { team, title },
});

export const changeUsername = (team, username) => ({
  type: ActionTypes.CHANGE_USERNAME,
  payload: { team, username },
});

export const saveTitle = (e) => ({
  type: ActionTypes.SAVE_TITLE,
  payload: e,
});

export const addTeam = () => ({
  type: ActionTypes.ADD_TEAM,
});

export const winTeam = (item, index) => ({
  type: ActionTypes.WIN_TEAM,
  payload: { item, index },
});

export const winTeam2 = (item) => ({
  type: ActionTypes.WIN_TEAM2,
  payload: item,
});

export const winnerTeam = () => ({
  type: ActionTypes.WINNER_TEAM,
});

export const winnerTeam2 = () => ({
  type: ActionTypes.WINNER_TEAM2,
});

export const winnerTeam3 = () => ({
  type: ActionTypes.WINNER_TEAM3,
});

export const changeModal = (modal) => ({
  type: ActionTypes.CHANGE_MODAL,
  payload: modal,
});

export const matchList = () => ({
  type: ActionTypes.MATCH_LIST,
});
