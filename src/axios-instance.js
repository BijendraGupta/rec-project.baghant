import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"https://rec-project-baghant.firebaseio.com/"
});

export default axiosInstance;