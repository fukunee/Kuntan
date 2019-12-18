import createPersistedState from 'vuex-persistedstate';
import getSocket from "../runtime/ws";
import authAxios from "../service/authAxios";

const state = {
    authState: -1,//-1:logout 0:login but not connected 1:login and connected
    user: {},
    socketId: '',
    token: ''
};
const getters = {
    // getcardsbylistid: (state, getters, rootstate) => listid => {
    //     return rootstate.board.lists.find(list => list._id === listid).cards;
    // },
    getAuthState: (state) => {
        return state.authState;
    },
    getUser: (state) => {
        return state.user;
    }
};
const mutations = {
    setUser(state, {user}) {
        state.user = user;
    },
    setSocketId(state, {socketId}) {
        state.socketId = socketId;
    },
    setToken(state, {token}) {
        state.token = token;
    },
    setAuthState(state, {authState}) {
        state.authState = authState;
    }
};
const actions = {
    //
    async syncAuth({commit}) {
        //!todo: 1.check websocket connection. true=>5 false=>2
        //!todo: 2.get token from localStorage.
        //!todo: 3.use service.get('auth') to check token
        console.log('syncAuth');
        const syncAuthRsp = await authAxios.syncAuth();
        //!todo: 4.start websocket connection
        const socketId = await getSocket();
        //!todo: 5.final

        //!todo setAuthState by user and token
        commit('setUser', syncAuthRsp.user);
        commit('setToken', syncAuthRsp.token);
        commit('setSocketId', socketId);
    },
    login({commit}, data) {

    },
    register({commit}, data) {

    },
    logout({commit}) {

    }
};

export default {
    namespaced: true,
    plugins: [createPersistedState()],
    state,
    getters,
    actions,
    mutations
};
