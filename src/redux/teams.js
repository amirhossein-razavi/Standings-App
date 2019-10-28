import * as ActionTypes from './ActionTypes';
// import { initialteam } from '../shared/teams'

export const Teams = (state = { data: [], selectedTeam: [] }, action) => {

    switch (action.type) {
        case (ActionTypes.ADD_TEAMS):
            const team = action.payload;
            const temp = [];
            console.log(state);

            for (let i = 0; i < team; i++) {
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
            }


        case (ActionTypes.ADD_TEAM):
            const sarb = {
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
                data: [].concat(state.data, sarb),
            }


        case (ActionTypes.DELETE_TEAM):
            const id = action.payload;
            console.log(id);
            console.log(state);
            return {
                ...state,
                data: state.data.filter((post) => post.id !== id)
            };



        case (ActionTypes.EDIT_TEAM):
            console.log(state);
            const editTeam = { ...action.payload };
            console.log(state.selectedTeam)
            return {
                ...state,
                selectedTeam:
                {
                    ...editTeam,
                    GA: 0,
                    GD: 0,
                    GF: 0,
                    Pts: 0
                }

            }


        case (ActionTypes.CHANGE_SELECTED):
            console.log(state.selectedTeam)
            const prop = action.payload.prop
            const value = action.payload.value
            return {
                ...state,
                selectedTeam: { ...state.selectedTeam, [prop]: value }
            }


        case (ActionTypes.UPDATE_TEAM):
            const selectedTeam = state.selectedTeam;
            console.log(state.selectedTeam);
            action.payload.preventDefault();
            return {
                ...state,
                data: state.data.map(item => (
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
                ))
            }

        case (ActionTypes.CHANGE_TITLE):
            // const titleIndex = action.payload.index
            // const title = action.payload.title
            // const newData = state.data;
            // newData[titleIndex].title = title;
            // console.log(state.data)
            // return {
            //     ...state,
            //     data: newData,
            // }

            return {
                ...state,
                data: state.data.map((item) => (
                    item.id === action.payload.team.id
                        ? { ...item, title: action.payload.title }
                        : item
                ))
            };

            


        case (ActionTypes.CHANGE_USERNAME):

            return{
                ...state,
                data: state.data.map(item =>(
                    item.id === action.payload.team.id
                    ? {...item , username: action.payload.username}
                    : item
                )),
            };

        case (ActionTypes.SAVE_TITLE):
            action.payload.preventDefault();
            console.log(state)
            return {
                ...state,
            }

        default:
            return state;
    }

};