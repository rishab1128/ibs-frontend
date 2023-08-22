import axios from 'axios';
const BASE_URL = "http://localhost:9090/api"
// const OPENACC_URL = "http://localhost:9090/api/openaccount";

class userService{
    saveUser(user){
        return axios.post(`${BASE_URL}/openaccount`,user);
    }
    saveUserId(user){
        return axios.post(`${BASE_URL}/register`,user);
    }
    getUsers(){
        return axios.get(`${BASE_URL}/userlist`);
    }
    getUser(userId){
        return axios.get(`${BASE_URL}/userDashboard/${userId}`)
    }
}

export default new userService();
