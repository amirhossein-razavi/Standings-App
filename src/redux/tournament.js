import * as ActionTypes from './ActionTypes';

export const Tournament = (state = { Tdata: [], fake: [], nextTeam: [], nextTeam2: [], nextTeam3: [] }, action) => {

    switch (action.type) {
        case (ActionTypes.ADD_TEAMS):
            const team = action.payload;
            const temp = [];
            // console.log("teamsNumber :" , team);
            for (let i = 0; i < team; i++) {
                temp.push(
                    {
                        id: Number(i + new Date().getTime()),
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
            const titleIndex = action.payload.index
            const title = action.payload.title
            const newData = state.Tdata;
            newData[titleIndex].title = title;
            newData[titleIndex].changed = true ;
            console.log(state.Tdata);
            return {
                ...state,
                Tdata: newData,
            }

        case (ActionTypes.SAVE_TITLE):
            action.payload.preventDefault();

            console.log(state);

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
            else return { ...state }


        case (ActionTypes.WINNER_TEAM2):
            return {
                ...state,
                nextTeam3: {
                    ...state.fake
                }
            }


        default:
            return state;
    }

};