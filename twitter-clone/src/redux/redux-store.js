import { combineReducers, createStore } from 'redux'
import postsReduser from './posts-reduser';
import messagesReduser from './messages-reduser';

// let reducers = combineReducers({
//   postsReduser,
//   messagesReduser
// })

let reducers = combineReducers({
  homePage: postsReduser,
  messagePage: messagesReduser
})

let store = createStore(reducers);


export default store

