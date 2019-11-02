import * as ActionTypes from './ActionTypes';
import { MODAL } from '../shared/modal'

export const Modal = (state = MODAL, action) => {

    switch (action.type) {
        case (ActionTypes.EDIT_TEAM):
            console.log(state);
            return {
                modal: 'openModal'
            }

        case (ActionTypes.ADD_TEAMS):
            return {
                ...state, modal: 'openTitleModal'
            }
        case (ActionTypes.ADD_TEAMS_T):
            return {
                ...state, modal: 'openTitleModal'
            }
        case (ActionTypes.ADD_TEAMS_D):
            return {
                ...state, modal: 'openTitleModal'
            }

        case (ActionTypes.CHANGE_MODAL):
            console.log("modal : ", state.modal)
            return {
                ...state, modal: action.payload
            }

        case (ActionTypes.HIDE_MODAL):
            return {
                ...state, modal: ''
            }
        default:
            return state;
    }

};