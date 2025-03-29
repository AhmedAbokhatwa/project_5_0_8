<template>
  <nav class="navbar">
    <div class="logo">MyApp</div>
    <ul class="nav-links">
      <li>
        <router-link to="/" 
        
        :class="{ 'bg-red-900': isActiveLink('/') }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/about"
          :class="{ 'bg-red-900': isActiveLink('/about') }"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          to="/contact"
          :class="{ 'bg-red-900': isActiveLink('/contact') }"
          >Contact</router-link
        >
      </li>
      <li>
        <router-link
          to="/contact"
          :class="{ 'bg-red-900': isActiveLink('/contact') }"
          >Contact</router-link
        >
      </li>
      <li>
        <router-link 
         to="/signin"
        :class="{ 'bg-red-900': isActiveLink('/signin') }"
        >sign in 
      </router-link>
      <router-link
      to="/signout"
      :class="{'bg-red-900':isActiveLink('/signout')}"
      >
      sign out
      </router-link>
      </li>
    </ul>
    
  </nav>

      <nav class="flex mb-5 text-sm">
    
    </nav>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const route = useRoute();

    const isActiveLink = (pathLink) => route.path === pathLink;

    return { isActiveLink };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav-links li a:hover {
  text-decoration: underline;
}

.bg-red-900 {
  background-color: #7f1d1d; /* Dark Red */
}
</style>
