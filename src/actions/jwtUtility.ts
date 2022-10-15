import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {JwtPayload} from 'jwt-decode';

export const setRequestHeader = (token:string):void => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const isTokenExpired = (token:string):boolean => {
    let decoded: JwtPayload = jwt_decode<JwtPayload>(token);
    console.log(decoded);
    
    if (decoded && decoded.exp) {
        return decoded.exp < Date.now()/1000;
    } else {
        return false;
    }
}