import api from '../../api/api'

export const moduleAuth = {
    namespaced: true,
    state: {
        exp: window.localStorage.getItem('exp'),
        sub: window.localStorage.getItem('subject') || '',
        iat: window.localStorage.getItem('iat'),
    },
    mutations: {
        startSession(state, data) {
            state.exp = data.exp;
            state.iat = data.iat;
            state.sub = data.sub;
        }
    },
    actions: {
        CheckAuthorize({commit}) {
            return new Promise((resolve, reject) => {
                api.getSession()
                    .then(response => {
                        if (response.status === 200) {
                            window.localStorage.setItem('sub', response.data.sub);
                            commit('startSession', response.data);
                            resolve(response.data)
                        }
                    })
                    .catch(error => {
                        if (error.response) {
                            window.localStorage.removeItem('sub');
                            commit('startSession', {});
                            reject(error.response.status)
                        }
                    })
            })
        },
        logout: function ({commit}) {
            api.logout()
                .then(response => {
                        if (response.status === 200) {
                            api.getSession().then(
                                response => {
                                    // eslint-disable-next-line no-console
                                    console.error('Error:', response)
                                },
                                error => {
                                    commit('startSession', {});
                                    // eslint-disable-next-line no-console
                                    console.log('Logout', error)
                                }).catch(
                                error => {
                                    // eslint-disable-next-line no-console
                                    console.log('Logout', error)
                                }
                            )
                        }
                    },
                    error => {
                        // eslint-disable-next-line no-console
                        console.error('Unauthorized', error)
                    }
                )
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.error('Server error', error)
                })
        },
        login: function ({commit}, payload) {
            api.login(payload)
                .then(
                    response => {
                        if (response.status === 200) {
                            api.getSession().then(
                                response => {
                                    commit('startSession', response.data)
                                },
                                error => {
                                    // eslint-disable-next-line no-console
                                    console.error('Session error: ', error)
                                })
                        }
                    },
                    error => {
                        // eslint-disable-next-line no-console
                        console.error('Login error: ', error)
                    }
                ).catch(
                error => {
                    // eslint-disable-next-line no-console
                    console.error('Server error: ', error)
                }
            )
        },
        registration: function ({commit}, payload) {
            api.registration(payload)
                .then(
                    response => {
                        if (response.status === 200) {
                            api.getSession().then(
                                response => {
                                    commit('startSession', response.data)
                                },
                                error => {
                                    // eslint-disable-next-line no-console
                                    console.error('Request error: ', error)
                                })
                        }
                    },
                    error => {
                        // eslint-disable-next-line no-console
                        console.error('Registration error: ', error)
                    }
                ).catch(error => {
                // eslint-disable-next-line no-console
                console.error('Server: error', error)
            })
        }
    },
    getters: {
        isAuthorized: state => !!state.sub
    }
};