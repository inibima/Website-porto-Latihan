<template>
    <img :src="imageSrc" alt="Profile Picture" class="profile-pic" />
  </template>
  
  <script>
  export default {
    name: 'FotoProfile',
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-pic {
    width: 50px;
    height: 76px;
    border-radius: 50%;
    margin-right: 10px;
  }
  </style>