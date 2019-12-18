import Axios from '../lib/axios';

export default {
    syncAuth() {
        return Axios().get('auth/sync');
    },
    register(credentials) {
        return Axios().post('auth/register', credentials);
    },
    login(credentials) {
        return Axios().post('auth/login', credentials);
    }
};
