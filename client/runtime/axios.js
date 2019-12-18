import axios from 'axios';
import store from '../store';

export default () => {
    // noinspection JSUnresolvedVariable
    return axios.create({
        baseURL: 'http://' + process.env.VUE_APP_BASEURL,
        timeout: 5000,
        headers: {
            'token': store.state.token
        }
    });
};
