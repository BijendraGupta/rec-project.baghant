import * as actionTypes from './action-types'
import axios from '../../axios-instance';

export const doRegister=(request,token)=>{
    
    return (dispatch)=>{
        delete request.password;  
        return  axios({url:"registrationFile.json?auth="+token,
                    method:'POST',
                    data:request,
                    config:{headers:{}}})
                .then((res)=>{dispatch({type:actionTypes.DO_REGISTRATION,payload:res});return res;})
                .catch(error=>{dispatch({type:actionTypes.ERROR,payload:error});return error;});
        
    };
    
}

export const clearTokenId=()=>{
    
        return  {
            type:actionTypes.CLEAR_TOKEN_ID,payload:null
        }
    
}