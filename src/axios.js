
 import axios from "axios";

 const instance = axios.create({
     baseURL: 'http://localhost:5001/bkofashion-v1/us-central1/api'
 });

 export default instance;