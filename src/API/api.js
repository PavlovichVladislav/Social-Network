import * as axios from "axios";

const istance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dd624455-7e20-4684-b6b6-d8c4c621a67d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return istance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    followRequest(userId) {
        return istance.post(`follow/${userId}`)
        .then(response => response.data);
    },
    unfollowRequest(userId) {
        return istance.delete(`follow/${userId}`)
        .then(response => response.data);
    },
    authRequest() {
        return istance.get(`auth/me`)
        .then(response => response.data);
    },
    getUserPage (userId) {
        return istance.get(`profile/${userId}`)
        .then(response => response.data);
    },
}