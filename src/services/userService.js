import axios from 'axios';
const BASE_URL = "http://localhost:9090/api/"
const OPENACC_URL = "http://localhost:9090/api/openaccount";

class userService{
    saveUser(user){
        return axios.post(OPENACC_URL,user);
    }
    getUsers(){
        return axios.get(`${BASE_URL}/userlist`);
    }
}

export default new userService();
