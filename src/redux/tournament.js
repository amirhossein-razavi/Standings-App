import * as ActionTypes from './ActionTypes';

export const Tournament = (state = { Tdata: [], TfinalData: [], fake: [], nextTeam: {}, nextTeam2: [], nextTeam3: [], nextTeam4: [], nextTeam5: [] }, action) => {

    switch (action.type) {
        case (ActionTypes.ADD_TEAMS_T):
            const team = action.payload;
            const temp = [];
            for (let i = 0; i < team; i++) {
                temp.push(
                    {
                        id: i,
                        title: '',
                        index: '',
                        changed: false
                    },
                );

            }

            return {
                ...state,
                Tdata: [].concat(state.Tdata, temp),
                routePage: true
            }

        case (ActionTypes.CHANGE_TITLE):
            return {
                ...state,
                Tdata: state.Tdata.map(t => (
                    t.id === action.payload.team.id
                        ? { ...t, title: action.payload.title, changed: true }
                        : t
                )),
            };

        case (ActionTypes.SAVE_TITLE):

            action.payload.preventDefault();
            const len = state.Tdata.length;
            const temp2 = [];

            for (let i = 0; i < len; i++) {
                const randIndex = Math.floor((Math.random() * state.Tdata.length));
                const slicedData = state.Tdata.slice(randIndex, randIndex + 1);
                state.Tdata.splice(randIndex, 1);
                temp2.push({
                    id: slicedData[0].id,
                    title: slicedData[0].title,
                    index: slicedData[0].index,
                    changed: true
                },
                );
            }

            return {
                ...state,
                TfinalData: [].concat(state.TfinalData, temp2),
            }


        case (ActionTypes.WIN_TEAM):

            const item = action.payload.item;
            const index = Number(action.payload.index);
            item.index = index;

            return {
                ...state,
                fake: {
                    ...item,
                }
            }


        case (ActionTypes.WINNER_TEAM):
            console.log('next team :', state.nextTeam)
            if (state.fake.index === 0 || state.fake.index === 1)
                return {
                    ...state,
                    nextTeam: { ...state.fake }
                }
            else if (state.fake.index === 2 || state.fake.index === 3)
                return {
                    ...state,
                    nextTeam2: { ...state.fake }
                }
            else if (state.fake.index === 4 || state.fake.index === 5)
                return {
                    ...state,
                    nextTeam4: { ...state.fake }
                }
            else return { ...state }


        case (ActionTypes.WINNER_TEAM2):
            return {
                ...state,
                nextTeam3: {
                    ...state.fake
                }
            }

        case (ActionTypes.WINNER_TEAM3):
            return {
                ...state,
                nextTeam5: {
                    ...state.fake
                }
            }


        default:
            return state;
    }

};