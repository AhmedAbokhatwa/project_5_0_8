<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 class="text-2xl font-bold text-center text-gray-700 mb-4">Login In</h2>
        <form @submit.prevent="handleLogin">
                <div class="mb-4 flex items-center justify-center">
                  <label class="block text-gray-700 text-sm font-bold m-2 p-3">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Enter your email"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div class="mb-4 flex items-center justify-center ">
                  <label class="block text-gray-700 text-sm font-bold m-2">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Enter your password"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Login
                </button>
                <button
                @click="signInWithGoogle"
                class="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center"
              >
                <span class="mr-2">Sign in with Google</span>
              </button>
              </form>           
          <p v-if="errorMessage" class="text-red-500 text-sm mt-3 text-center">{{ errorMessage }}</p>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      if (this.email === "admin@example.com" && this.password === "password123") {
        alert("Login successful!");
      } else {
        this.errorMessage = "Invalid email or password.";
      }
    }
  }
};
</script>