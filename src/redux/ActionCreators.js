import * as ActionTypes from './ActionTypes';

export const addTeams = (title) => ({
    type: ActionTypes.ADD_TEAMS,
    payload: Number(title)
})

export const addTeamsT = (title) => {
    console.log("addTeamsT" , title)
    return {
        type: ActionTypes.ADD_TEAMS_T,
        payload: Number(title)
    };
}

export const deleteTeam = (id) => ({
    type: ActionTypes.DELETE_TEAM,
    payload: Number(id)
})

export const updateTeam = (e) => ({
    type: ActionTypes.UPDATE_TEAM,
    payload: e
})

export const editTeam = (team) => ({
    type: ActionTypes.EDIT_TEAM,
    payload: team
})


export const changeSelected = (prop, value) => ({
    type: ActionTypes.CHANGE_SELECTED,
    payload: { prop, value }
})


export const hideModal = () => ({
    type: ActionTypes.HIDE_MODAL
})


export const sarbconsole = (sarb) => ({
    type: ActionTypes.CONSOLE,
    payload: sarb
})

export const changeTitle = (team, title) => ({
    type: ActionTypes.CHANGE_TITLE,
    payload: { team, title }
})

export const changeUsername = (index, username) => ({
    type: ActionTypes.CHANGE_USERNAME,
    payload: { index, username }
})

export const saveTitle = (e) => ({
    type: ActionTypes.SAVE_TITLE,
    payload: e
})

export const addTeam = () => ({
    type: ActionTypes.ADD_TEAM,
})

export const winTeam = (item, index) => {
    console.log('winTeam function', item, index);
    return {
        type: ActionTypes.WIN_TEAM,
        payload: { item, index }
    };
}

export const winnerTeam = () => ({
    type: ActionTypes.WINNER_TEAM,
})

export const winnerTeam2 = () => ({
    type: ActionTypes.WINNER_TEAM2,
})

export const winnerTeam3 = () => ({
    type: ActionTypes.WINNER_TEAM3,
})

export const changeModal = (modal) => ({
    type: ActionTypes.CHANGE_MODAL,
    payload: modal
})