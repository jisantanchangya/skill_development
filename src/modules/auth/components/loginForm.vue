<script>

</script>

<template>
    <div class="gap-4 w-96">
        <form action=""
            class="flex flex-col gap-4"
        >
            <div class="focus-within:border-blue-500 border border-gray-300 hover:border-blue-500 rounded-xl gap-1">
                <input type="email" placeholder="Email" class="w-full focus:outline-none p-3" />
            </div>

            <div class="focus-within:border-blue-500 border border-gray-300 hover:border-blue-500 rounded-xl gap-1">
                <input type="password" placeholder="Password" class="w-full focus:outline-none p-3" />
            </div>

            <p class="text-sm text-gray-500">
                <a href="#" class="text-blue-500 hover:underline">Forgot password? </a>
            </p>

            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">Login</button>
        </form>
        <p class="text-center mt-4 text-sm text-gray-500">
            Don't have an account? <router-link to="/register" class="text-blue-500 hover:underline">Sign up</router-link>
        </p>
    </div>

</template>