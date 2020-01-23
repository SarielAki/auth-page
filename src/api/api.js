import axios from 'axios'
export const HTTP = axios.create({
    baseURL: `${process.env.VUE_APP_SERVER_LOCATION}`
});

axios.defaults.baseURL = `${process.env.VUE_APP_SERVER_LOCATION}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

export default {
    login(user_object) {
        return axios.post('/session', user_object)
    },

    getSession() {
        return axios.get('/session')
    },

    registration(user_object) {
        return axios.post('/users', user_object)
    },

    logout() {
        return axios.delete('/session')
    }
}