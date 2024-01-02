import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:5000' 
    }
);

/* For Best Practices https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables*/
