import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-burger-build-75ed5.firebaseio.com/'
});

export default instance;