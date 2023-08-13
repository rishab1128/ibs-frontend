import axios from 'axios';
const ADD_USER_URL = "http://localhost:9090/api/users/";

class userService{
    saveUser(user){
        return axios.post(ADD_USER_URL,user);
    }
}

export default new userService();
