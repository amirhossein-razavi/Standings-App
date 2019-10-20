import {createStore, combineReducers} from 'redux';
import {Teams} from './teams'
import {Modal} from './modal'
import {Tournament} from './tournament'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            teams : Teams,
            modal : Modal,
            tournament : Tournament
        })
    )
    return store;
};