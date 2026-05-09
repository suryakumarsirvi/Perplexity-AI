import {API} from '../../../api/axios.api.js';

export const registerService = async (data)=>{
    const response = await API.post('/auth/register', data);
    return response.data;
}

export const loginService = async (data)=>{
    const response = await API.post('/auth/login', data);
    return response.data
}

export const logoutService = async () =>{
    const response = await API.post('/auth/logout');
    return response.data;
}

export const getMeService = async()=>{
    const response = await API.get('/auth/getme');
    return response.data
}

// export const GoogleAuthURL = () =>{
//     return 
// }