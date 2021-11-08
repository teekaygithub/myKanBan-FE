import axios from 'axios';

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