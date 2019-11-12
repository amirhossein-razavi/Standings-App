import * as ActionTypes from './ActionTypes';
import MODAL from '../shared/modal';

const Modal = (state = MODAL, action) => {
  switch (action.type) {
    case (ActionTypes.EDIT_TEAM):
      return {
        modal: 'openModal',
      };

    case (ActionTypes.ADD_TEAMS):
      return {
        ...state, modal: 'openTitleModal',
      };
    case (ActionTypes.ADD_TEAMS_T):
      return {
        ...state, modal: 'openTitleModal',
      };
    case (ActionTypes.ADD_TEAMS_D):
      return {
        ...state, modal: 'openTitleModal',
      };
    case (ActionTypes.MATCH_LIST):
      return {
        ...state, modal: 'matchList',
      };
    case (ActionTypes.CHANGE_MODAL):
      return {
        ...state, modal: action.payload,
      };

    case (ActionTypes.HIDE_MODAL):
      return {
        ...state, modal: '',
      };
    default:
      return state;
  }
};

export { Modal as default };
