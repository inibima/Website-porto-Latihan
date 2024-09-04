<template>
  <div>
    <Header />
    <router-view />
    <!-- Footer dihapus -->
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header
  }
};
</script>