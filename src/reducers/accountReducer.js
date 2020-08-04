const INTIAL_STATE = {
    user:{}
}

const accountReducer = (state = INTIAL_STATE , action) => {
    if(action.type =="LOGIN_SUCCESS"){
        return {...state,
                user:action.payload.user
        
        }
    }
    return state;
   
    }
export default accountReducer;