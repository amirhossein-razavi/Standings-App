import * as ActionTypes from './ActionTypes';

const Dec = (state = { Ddata: [], DfinalData: [], fake: [], nextTeam: {}, nextTeam2: [], nextTeam3: [], nextTeam4: [], nextTeam5: [], nextTeamD: {}, nextTeam2D: [], nextTeam3D: [], nextTeam4D: [], nextTeam5D: [] }, action) => {
  switch (action.type) {
    case (ActionTypes.ADD_TEAMS_D): {
      const team = action.payload;
      const temp = [];
      for (let i = 0; i < team; i += 1) {
        temp.push(
          {
            id: i,
            title: '',
            index: '',
            changed: false,
          },
        );
      }

      return {
        ...state,
        Ddata: [].concat(state.Ddata, temp),
        routePage: true,
      };
    }
    case (ActionTypes.CHANGE_TITLE): {
      return {
        ...state,
        Ddata: state.Ddata.map((t) => (
          t.id === action.payload.team.id
            ? { ...t, title: action.payload.title, changed: true }
            : t
        )),
      };
    }
    case (ActionTypes.SAVE_TITLE): {
      action.payload.preventDefault();
      const len = state.Ddata.length;
      const temp2 = [];

      for (let i = 0; i < len; i += 1) {
        const randIndex = Math.floor((Math.random() * state.Ddata.length));
        const slicedData = state.Ddata.slice(randIndex, randIndex + 1);
        state.Ddata.splice(randIndex, 1);
        temp2.push({
          id: slicedData[0].id,
          title: slicedData[0].title,
          index: slicedData[0].index,
          changed: true,
        });
      }

      return {
        ...state,
        DfinalData: [].concat(state.DfinalData, temp2),
      };
    }
    case (ActionTypes.WIN_TEAM): {
      const { item } = action.payload;
      const { index } = Number(action.payload);
      item.index = index;

      return {
        ...state,
        fake: {
          ...item,
        },
      };
    }
    case (ActionTypes.WIN_TEAM2): {
      const item2 = action.payload;

      return {
        ...state,
        fake: {
          ...item2,
        },
      };
    }
    case (ActionTypes.WINNER_TEAM): {
      if (state.fake.index === 0) {
        return {
          ...state,
          nextTeam: { ...state.fake },
          nextTeamD: { ...state.DfinalData[1], index: 1 },
        };
      }
      if (state.fake.index === 1) {
        return {
          ...state,
          nextTeam: { ...state.fake },
          nextTeamD: { ...state.DfinalData[0], index: 0 },
        };
      } if (state.fake.index === 2) {
        return {
          ...state,
          nextTeam2: { ...state.fake },
          nextTeam2D: { ...state.DfinalData[3], index: 3 },
        };
      } if (state.fake.index === 3) {
        return {
          ...state,
          nextTeam2: { ...state.fake },
          nextTeam2D: { ...state.DfinalData[2], index: 2 },
        };
      }
      // else if (state.fake.index === 4)
      //     return {
      //         ...state,
      //         nextTeam4: { ...state.fake },
      //         nextTeam3D: { ...state.DfinalData[5] }
      //     }
      // else if (state.fake.index === 5)
      //     return {
      //         ...state,
      //         nextTeam4: { ...state.fake },
      //         nextTeam3D: { ...state.DfinalData[4] }
      //     }
      return { ...state };
    }

    case (ActionTypes.WINNER_TEAM2):
      if (state.fake.index === 0 || state.fake.index === 1) {
        return {
          ...state,
          nextTeam3: { ...state.fake },
          nextTeam3D: { ...state.nextTeam2 },
        };
      } if (state.fake.index === 2 || state.fake.index === 3) {
        return {
          ...state,
          nextTeam3: { ...state.fake },
          nextTeam3D: { ...state.nextTeam },
        };
      } return { ...state };

    case (ActionTypes.WINNER_TEAM3):
      if (state.nextTeam4D.title) {
        return {
          ...state,
          nextTeam5D: {
            ...state.fake,
          },
        };
      } if (state.nextTeam5D.title) {
        return state;
      }
      return {
        ...state,
        nextTeam4D: {
          ...state.fake,
        },
      };

    default:
      return state;
  }
};

export { Dec as default };
