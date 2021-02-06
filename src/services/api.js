import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://gama-bankline-desbugados.herokuapp.com/'
});

export default Api;