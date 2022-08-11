import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dd624455-7e20-4684-b6b6-d8c4c621a67d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    followRequest(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data);
    },
    unfollowRequest(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data);
    },
    authRequest() {
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    getUserPage(userId) {
        console.log('method is deprecated');    
        return profileAPI.getUserPage(userId)
    },
}

export const profileAPI = {
    getUserPage(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
        .then(response => response.data);
    }
}