import axios from 'axios';

const transport  = axios.create({

});


transport.interceptors.request.use();

transport.interceptors.response.use();


export { transport };