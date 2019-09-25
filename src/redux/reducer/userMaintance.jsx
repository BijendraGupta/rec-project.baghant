import * as actionTypes from './../action/action-types'

const initialState = {
    error:false,
    errorMsg:''
};

const userMaintance= (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.DO_REGISTRATION:
        return {
            ...state,
            user:action.payload
        };
        break;
        case actionTypes.ERROR:
        return {
            ...state,
            error:action.payload
        };
        break;
        case actionTypes.AUTH_SUCCESS:
        return {
            ...state,
            authSuccess:action.payload,
            spinner:action.payload.spinner
        };
        break;
        case actionTypes.AUTH_START:
        return {
            ...state,
            authData:action.payload,
            spinner:action.payload.spinner
        };
        break;
        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            authError:action.error,
            spinner:action.error.spinner
        };
        break;
        case actionTypes.CLEAR_TOKEN_ID:
        return {
            ...state,
            authSuccess:action.payload
        };
        break;
        default:
        console.log("No action matches"); 
        return state;

    }
}

export default userMaintance;