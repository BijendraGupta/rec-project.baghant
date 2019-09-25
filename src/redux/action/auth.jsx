import * as actionTypes from './action-types'
import axios from 'axios';
import { ActionTrendingUp } from 'material-ui/svg-icons';

export const authStart=(userInfo)=>{
    return {type:actionTypes.AUTH_START,payload:userInfo}
    
}

export const authSuccess=(authData, spinner)=>{
    return {type:actionTypes.AUTH_SUCCESS,payload:{...authData,spinner:spinner}}
    
}


export const authFAil=(error,spinner)=>{
    return {type:actionTypes.AUTH_FAIL,
    error:{...error,spinner:spinner}}
    
}

export const auth=(user,password,signin)=>{
    return (dispatch)=>{
        let url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-UDgzSuKlnFcQECpXObANN3T3wZohXuI";
        if(signin===false){
            url="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB-UDgzSuKlnFcQECpXObANN3T3wZohXuI";
        }
        dispatch(authStart({email:user,pass:password,signIn:signin,spinner:true}));
       return axios({url:url,
                    method:'POST',
                    data:{email:user,password:password,returnSecureToken:true},
                    config:{headers:{}}})
                .then(res=>{dispatch(authSuccess(res,false));return res;})
                .catch(error=>{dispatch(authFAil(error,false));return error;});
        
    };
    
}