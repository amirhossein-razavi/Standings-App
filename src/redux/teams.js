/* eslint-disable no-restricted-globals */
import * as ActionTypes from './ActionTypes';
// import { initialteam } from '../shared/teams'

const Teams = (state = { data: [], selectedTeam: [], matchData: [] }, action) => {
  switch (action.type) {
    case (ActionTypes.ADD_TEAMS): {
      const teamsNumber = action.payload;
      const temp = [];

      for (let i = 0; i < teamsNumber; i += 1) {
        temp.push(
          {
            id: Number(i + new Date().getTime()),
            title: 'Enter Team Name',
            username: 'Enter Username',
            Pts: 0,
            GF: 0,
            GA: 0,
            GD: 0,
          },
        );
      }

      return {
        ...state,
        data: [].concat(state.data, temp),
      };
    }


    case (ActionTypes.ADD_TEAM): {
      const addTemp = {
        id: Number(new Date().getTime()),
        title: 'Enter Team Name',
        username: 'Enter Username',
        Pts: 0,
        GF: 0,
        GA: 0,
        GD: 0,
      };

      return {
        ...state,
        data: [].concat(state.data, addTemp),
      };
    }


    case (ActionTypes.DELETE_TEAM): {
      const id = action.payload;
      const onConfirm = confirm('Are you sure ?');

      if (onConfirm) {
        return {
          ...state,
          data: state.data.filter((post) => post.id !== id),
          matchData: state.matchData.filter((post) => post.id !== id),
        };
      }
      return state;
    }

    case (ActionTypes.EDIT_TEAM): {
      const editTeam = { ...action.payload };
      return {
        ...state,
        selectedTeam:
        {
          ...editTeam,
          GA: 0,
          GD: 0,
          GF: 0,
          Pts: 0,
        },
      };
    }


    case (ActionTypes.CHANGE_SELECTED): {
      const { prop } = action.payload;
      const { value } = action.payload;
      return {
        ...state,
        selectedTeam: { ...state.selectedTeam, [prop]: value },
      };
    }

    case (ActionTypes.UPDATE_TEAM): {
      const { selectedTeam } = state;
      action.payload.preventDefault();

      return {
        ...state,
        data: state.data.map((item) => (
          item.id === selectedTeam.id
            ? {
              ...item,
              title: selectedTeam.title,
              username: selectedTeam.username,
              GF: Number(selectedTeam.GF) + Number(item.GF),
              GA: Number(selectedTeam.GA) + Number(item.GA),
              GD: Number(item.GD) + Number(selectedTeam.GF) - Number(selectedTeam.GA),
              Pts: Number(selectedTeam.Pts) + Number(item.Pts),
            }
            : item
        )),
        matchData: state.matchData.map((i) => (
          i.id === selectedTeam.id
            ? {
              ...i,
              title: selectedTeam.title,
              username: selectedTeam.username,
              GF: Number(selectedTeam.GF) + Number(i.GF),
              GA: Number(selectedTeam.GA) + Number(i.GA),
              GD: Number(i.GD) + Number(selectedTeam.GF) - Number(selectedTeam.GA),
              Pts: Number(selectedTeam.Pts) + Number(i.Pts),
            }
            : i
        )),
      };
    }

    case (ActionTypes.CHANGE_TITLE):

      return {
        ...state,
        data: state.data.map((item) => (
          item.id === action.payload.team.id
            ? { ...item, title: action.payload.title }
            : item
        )),
      };


    case (ActionTypes.CHANGE_USERNAME): {
      return {
        ...state,
        data: state.data.map((item) => (
          item.id === action.payload.team.id
            ? { ...item, username: action.payload.username }
            : item
        )),
      };
    }

    case (ActionTypes.SAVE_TITLE): {
      action.payload.preventDefault();

      const fake = [...state.data];
      const len = fake.length;
      const matchTemp = [];

      for (let i = 0; i < len; i += 1) {
        const newlen = fake.length;
        const randIndex = Math.floor((Math.random() * newlen));
        const slicedData = fake.slice(randIndex, randIndex + 1);
        fake.splice(randIndex, 1);
        matchTemp.push({
          id: slicedData[0].id,
          title: slicedData[0].title,
          username: slicedData[0].username,
          index: slicedData[0].index,
          Pts: slicedData[0].Pts,
          GF: slicedData[0].GF,
          GA: slicedData[0].GA,
          GD: slicedData[0].GD,
        });
      }
      return {
        ...state,
        matchData: [].concat(state.matchData, matchTemp),
      };
    }

    default:
      return state;
  }
};

export { Teams as default };
