<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <FotoProfile :imageSrc="profileImage" />
        <h1>Nugraha Bhirawa Kholis</h1>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Beranda</router-link></li>
        <li><router-link to="/about">Tentang</router-link></li>
        <li><router-link to="/experience">Pengalaman</router-link></li>
        <li><router-link to="/projects">Proyek</router-link></li>
        <li><router-link to="/contact">Kontak</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import FotoProfile from './FotoProfile.vue';
import profileImage from './assets/profile.jpg';

export default {
  name: 'Header',
  components: {
    FotoProfile
  },
  data() {
    return {
      profileImage
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-links li a:hover {
  color: #007bff;
}
</style>