import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    actions: {
        async register(userdata) {
            
            const response = await axios.post(
                'http://localhost:8000/api/register',
                 userdata
            )
            return response.data;
        }
    }
})
            