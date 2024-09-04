<template>
  <section id="experience" class="experience">
    <h2>Pengalaman</h2>
    <table class="experience-table">
      <tr>
        <th>Memasukkan Data Form Pendaftaran ke MongoDB</th>
      </tr>
      <tr>
        <td>
          <p>Menyimpan data pengguna dengan aman untuk memastikan registrasi berjalan lancar dan data dikelola dengan baik. Hasilnya adalah database pengguna yang terstruktur, dibuat dalam satu minggu menggunakan MongoDB.</p>
        </td>
      </tr>
      <tr>
        <th>Mengembangkan Komponen Utama</th>
      </tr>
      <tr>
        <td>
          <p>Membuat komponen seperti Header, Footer, dan Produk untuk meningkatkan navigasi dan interaksi pengguna. Hasilnya adalah halaman web yang terstruktur dengan baik, diselesaikan dalam 3 minggu menggunakan Vue.js.</p>
        </td>
      </tr>
      <tr>
        <th>Memasukkan Enam Produk dalam Website</th>
      </tr>
      <tr>
        <td>
          <p>Menambahkan produk ke katalog online untuk menawarkan lebih banyak pilihan belanja kepada pengguna. Hasilnya adalah tampilan produk yang lengkap dan menarik, selesai dalam satu minggu menggunakan JavaScript.</p>
        </td>
      </tr>
      <tr>
        <th>Pengujian dan Optimalisasi</th>
      </tr>
      <tr>
        <td>
          <p>Melakukan pengujian fungsional dan performa untuk memastikan semua fitur berfungsi dengan baik. Hasilnya adalah situs yang stabil dengan waktu muat di bawah 3 detik, diselesaikan dalam 1 minggu.</p>
        </td>
      </tr>
      <tr>
        <th>Menyesuaikan Bentuk Website Sesuai Keinginan</th>
      </tr>
      <tr>
        <td>
          <p>Melakukan kustomisasi tampilan dan fungsionalitas untuk memenuhi preferensi dan kebutuhan bisnis. Hasilnya adalah desain yang unik dan fungsional, diselesaikan dalam 2 minggu menggunakan CSS dan HTML.</p>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Experience',
};
</script>

<style scoped>
.experience {
  padding: 20px;
  background-color: #fff;
  color: #333;
}

.experience h2 {
  font-size: 2em;
  margin-bottom: 10px;
  text-align: left;
}

.experience-table {
  width: 100%;
  border-collapse: collapse;
}

.experience-table th, .experience-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.experience-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.experience-table td p {
  margin: 0;
}
</style>