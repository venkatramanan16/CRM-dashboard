import axios from 'axios';

const instances = axios.create({
    baseURL : 'https://crm-dashboard-d1316-default-rtdb.firebaseio.com/'
})

export default instances