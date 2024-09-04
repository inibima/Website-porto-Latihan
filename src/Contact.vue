<template>
  <section id="contact" class="contact">
    <h2>Kontak</h2>
    <div class="contact-info">
      <p>
        Hubungi saya melalui:
      </p>
      <p>
        <a href="https://wa.me/1234567890" target="_blank" class="icon-link">
          <img :src="whatsappLogo" alt="WhatsApp" class="icon" />
          WhatsApp
        </a>
      </p>
      <p>
        <a href="https://linkedin.com/in/username" target="_blank" class="icon-link">
          <img :src="linkedinLogo" alt="LinkedIn" class="icon" />
          LinkedIn
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import whatsappLogo from './assets/whatsapp-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';

export default {
  name: 'Contact',
  data() {
    return {
      whatsappLogo,
      linkedinLogo
    };
  }
};
</script>

<style scoped>
.contact {
  padding: 20px;
  background-color: #fff;
  color: #333;
}

.contact h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.contact-info {
  font-size: 1em;
  line-height: 1.5;
}

.icon-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.icon {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}
</style>