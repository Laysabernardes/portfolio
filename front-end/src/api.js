import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-37lf.onrender.com/'
  });
  //http://localhost:3001/
  //https://portfolio-37lf.onrender.com/
export default instance;