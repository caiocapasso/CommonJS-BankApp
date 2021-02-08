import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://bankline-accenture.herokuapp.com/'
});

export default Api;