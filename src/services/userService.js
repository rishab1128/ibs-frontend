import axios from 'axios';
const USER_URL = "http://localhost:9090/api/users/";

class userService{
    saveUser(user){
        return axios.post(USER_URL,user);
    }
    getUsers(){
        return axios.get(USER_URL);
    }
}

export default new userService();
