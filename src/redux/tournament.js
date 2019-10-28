import * as ActionTypes from './ActionTypes';
import { sarbconsole } from './ActionCreators';

export const Tournament = (state = { Tdata: [], TfinalData: [], fake: [], nextTeam: [], nextTeam2: [], nextTeam3: [], nextTeam4: [], nextTeam5: [] }, action) => {

    switch (action.type) {
        case (ActionTypes.ADD_TEAMS_T):
            const team = action.payload;
            const temp = [];
            // console.log("teamsNumber :" , team);
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
            }

        case (ActionTypes.CHANGE_TITLE):
            // const titleIndex = action.payload.index
            // const title = action.payload.title
            // const newData = state.Tdata;
            // newData[titleIndex].title = title;
            // newData[titleIndex].changed = true;




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

            
            // const newFinalData = [];

            for (let i = 0; i < state.Tdata.length; i++) {
                const randIndex = Math.floor((Math.random() * state.Tdata.length));
                const FinalData = state.Tdata.slice(randIndex, randIndex + 1);
                console.log("FinalData : " , FinalData);
                // newFinalData.push(FinalData);
            }
            

            console.log("TfinalData : " , state.TfinalData)

            return {
                ...state,
            }


        case (ActionTypes.WIN_TEAM):

            console.log('fake : ', state.fake)

            const item = action.payload.item;
            const index = Number(action.payload.index);

            return {
                ...state,
                fake: {
                    ...item,
                    index: index
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