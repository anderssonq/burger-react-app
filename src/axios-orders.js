import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-backend-e7d1d.firebaseio.com/'
});

export default instance;