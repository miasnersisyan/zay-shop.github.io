
import { combineReducers, createStore } from 'redux'
import { likesInitialState, likesReducer } from './likes/likesSlicer'
import { shopBalanceInitialState, shopBalanceReducer } from './shopBalance/shopBalanceSlicer'

const store = createStore(combineReducers({
   shopBalance : shopBalanceReducer,
   likes : likesReducer
}),{
   shopBalance : shopBalanceInitialState,
   likes : likesInitialState
})

export default store


