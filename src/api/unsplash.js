import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KY8GPElwOuzQqp8sWwf6wcjVKweeCsjzwE1N6kEF6dA'
    }
});