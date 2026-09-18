<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

export default {
    setup() {
        const authStore = useAuthStore();
        const username = ref('');
        const email = ref('');
        const password = ref('');

        const register = async () => {
            const userData = {
                username: username.value,
                email: email.value,
                password: password.value,
            };

            await authStore.register(userData);
        };

        return {
            username,
            email,
            password,
            register,
        };
    },
};
</script>

<template>
    <div class="gap-4 w-96">
        <form action="" @submit.prevent="register" class="flex flex-col gap-4">
            <div class="focus-within:border-blue-500 border border-gray-300 rounded-xl hover:border-blue-500 gap-1">
                <input type="text" v-model="username" placeholder="Username" class="w-full focus:outline-none p-3" />
            </div>
            <div class="focus-within:border-blue-500 border border-gray-300 rounded-xl hover:border-blue-500 gap-1">
                <input type="email" v-model="email" placeholder="Email" class="w-full focus:outline-none p-3" />
            </div>
            <div class="focus-within:border-blue-500 border border-gray-300 rounded-xl hover:border-blue-500 gap-1">
                <input type="password" v-model="password" placeholder="Password"
                    class="w-full focus:outline-none p-3" />
            </div>
            <button type="submit"
                class="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">Register</button>
        </form>
    </div>
</template>