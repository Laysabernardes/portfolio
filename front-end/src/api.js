import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-37lf.onrender.com/'
  });

export default instance;