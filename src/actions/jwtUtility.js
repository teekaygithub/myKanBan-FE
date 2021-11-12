import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const setRequestHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const headerConfig = {
    headers: {
        'Authorization': localStorage.getItem('jwt')
    }
}

export const isTokenExpired = (token) => {
    let decoded = jwt_decode(token);
    console.log(decoded);
    return decoded.exp < Date.now()/1000;
}