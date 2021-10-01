import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8001'
});

export default instance;