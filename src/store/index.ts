import Account from '../reducer/Account';
import Notification from '../reducer/Notification';



import { createStore, combineReducers  } from 'redux'

const AllReducer = combineReducers({
    Account,
    Notification
})
const store = createStore(AllReducer);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
