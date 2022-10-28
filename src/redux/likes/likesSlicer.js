
const TYPE = 'changeLikes'

export const likesInitialState = {
    likes : 0
}





export function likesReducer(state = likesInitialState,action){
    if(action.type === TYPE){
        return{
            ...state,
            likes : action.payload.likes
        }
    }
    return state
}

export function findLikes(state){
    return state.likes.likes
}

export function changeLikes(newLikes){
    return {
        type : TYPE,
        payload : {
            likes : newLikes
        }
    }
}