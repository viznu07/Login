import Axios from "axios"
import { localStorageKeys } from "../utils";

export const networkCall = (url, method, body, headers,isAuthorized=false) => {

    //Checking the Internet connection
    if(!navigator.onLine){
        return Promise.reject({message:"Unable to connect with Internet!"});
    }

    //Initializing the header
    let newHeader = headers;

    //Adding Authorization to headers if it is requested
    if(isAuthorized){
        newHeader = {
            ...headers,
            Authorization: localStorageKeys.auth_token
        }
    }

    return Axios({
        method: method,
        url: url,
        data: body,
        headers: newHeader
    });
}