
import axios from "axios";
class Middleware {

    // Method to perform user login by sending a POST request with user data
    login(user) {
        return axios.post("http://localhost:8089/api/v1/user/login", user)
    }
    // Method to register a new user by sending a POST request with user data
    register(user) {
        return axios.post("http://localhost:8089/api/v1/user/save", user)
    }
}
export default new Middleware();