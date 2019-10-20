export default store => ({
    data: store.getState().data,
    team: store.getState().team,
    modal: store.getState().modal,
    id: store.getState().id,
    teamsNumber: store.getState().teamsNumber,

    showAddModal: () => {
        store.setState(state => ({
            modal: 'add',
            team: {
                id: new Date().getTime(),
                title: '',
                Pts: 0,
                GF: 0,
                GA: 0,
                GD: 0,
            },
            teamsNumber : ''
        }));
    },

    onHideModal: () => {
        store.setState({
            modal: ''
        })
    },

    onChangeStart: (value) => {
        store.setState({
            teamsNumber : parseInt(value)
        });
    },

    onChangeTitle: (prop, value) => {
        store.setState(state => ({
            team: {
                ...state.team,
                [prop]: value,
            },
        }));
    },

    onChangeGF: (prop, value) => {
        // const = state.team.GF;
        store.setState(state => ({
            team: {
                ...state.team,
                [prop]: Number(value)
            },
        }));
    },

    onChangeGA: (prop, value) => {
        store.setState(state => ({
            team: {
                ...state.team,
                [prop]: Number(value),
            },
        }));
    },

    onChangePts: (prop, value) => {
        store.setState(state => ({
            team: {
                ...state.team,
                [prop]: Number(value)
            },
        }));
    },



    onSave: () => {
        const originalData = store.getState().data || [];
        const temp = [];
        const teamsNumber = store.getState().teamsNumber;
        console.log(teamsNumber);
        for(let i = 0; i < teamsNumber; i++) {
            temp.push({
                id: i,
                title: 'Enter Name',
                Pts: 0,
                GF: 0,
                GA: 0,
                GD: 0,
            });
        }
        
        store.setState({
            data: [
                ...originalData,
                ...temp,
            ],
            modal: '',
        });
    },



    // onEdit1: (event) => {
    //     event.preventDefault();
    //     // console.log(1);
    //     const teams = store.getState().data;
    //     const ids = store.getState().id;
    //     // console.log(ids);
    //     store.setstate ({
    //         teams.map(post => {
    //             console.log(2);
    //             if (post.id == ids) {
    //                 console.log(3);
    //                 post['title'] = event.target.value;
    //                 console.log(4);
    //                 return post;
    //             }
    //             console.log(5);
    //             return post;
    //         })
    //     })

    // },

    modalEdit: (team) => {
        store.setState(state =>({
            modal: 'name',
            team: {
                ...team,
                GA : 0,
                GD : 0,
                GF : 0,
                Pts : 0
            },
        }))
    },

    onEdit: (event) => {

        event.preventDefault();
        const { team } = store.getState();
        console.log(team)
        store.setState(state => ({
            // team : {GF : state.team.GF + state.team.GF} ,
            data : state.data.map(item => (
                item.id === team.id
                    ? { 
                        ...item,
                       title : team.title,
                       GF : Number(team.GF) + Number(item.GF),
                       GA : Number(team.GA) + Number(item.GA),
                       GD : Number(item.GD) + Number(team.GF) - Number(team.GA),
                       Pts : Number(team.Pts) + Number(item.Pts),
                     }
                    : item
            )),
            modal : ''
        }));
        console.log(team.GD);
        console.log(team.GF);
    },
        // teams.map(team => {
        //     if (team.id === ids) {

        //         const value = event.target.update.value;
        //         console.log(team.title);
        //         console.log(value);

        //         store.setState({
        //             [title]: `${value}`,
        //             modal: '',
        //         })

        //         return post;
        //     }

        //     return post;

        // })

 


    onDelete: (teamId) => {
        store.setState(state => ({
            data: state.data.filter(team => team.id !== teamId),
        }));
    },


}
)



