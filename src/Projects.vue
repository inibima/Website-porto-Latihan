<template>
  <section id="projects" class="projects">
    <h2>Proyek</h2>
    <div class="project">
      <h3 class="project-title">BimaMall</h3>
      <img :src="projectImage" alt="Project Image" class="project-image" />
      <p class="description">BimaMall adalah platform e-commerce berbasis web yang dikembangkan menggunakan Vue.js untuk front-end dan MongoDB untuk back-end. Website ini dirancang untuk menjual berbagai game populer, seperti "Resident Evil", "Grand Theft Auto: San Andreas", "The Elder Scrolls V: Skyrim", dan "Cyberpunk 2077". Fitur utama termasuk antarmuka pengguna yang bersih dan responsif, fungsi pencarian produk yang efisien, dan navigasi yang intuitif untuk meningkatkan pengalaman pengguna. Proyek ini juga mencakup elemen desain yang fokus pada kenyamanan pengguna dan kecepatan akses yang optimal.</p>
    </div>
  </section>
</template>

<script>
import projectImage from './assets/BimaMall.png';

export default {
  name: 'Projects',
  data() {
    return {
      projectImage,
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 20px;
  background-color: #fff;
  color: #333;
  text-align: center;
}

.projects h2 {
  font-size: 2em;
  margin-bottom: 10px;
  text-align: left;
}

.project {
  margin-bottom: 20px;
}

.project-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.project-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
}

.description {
  font-size: 1em;
  line-height: 1.5;
  margin-top: 10px;
}
</style>