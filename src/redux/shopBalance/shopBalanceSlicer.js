
const TYPE = 'changeBalance'

export const shopBalanceInitialState = {
    shopBalance : 6200
}

export function shopBalanceReducer(state = shopBalanceInitialState,action){
    if(action.type === TYPE){
        return{
            ...state,
            shopBalance : action.payload.shopBalance
        }
    }

    return state
}

export function selectShopBalance(state){
   return state.shopBalance.shopBalance
}

export function changeShopBalance(newBalance){
    return{
        type : TYPE,
        payload : {
            shopBalance : newBalance
        }
    }
}

