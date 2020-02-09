<template>
  <!-- <div class="test">
    <img alt="Vue logo" src="../assets/logo.png" /> -->

  <!-- </div>  -->
  <div class="test">
    <img alt="ITS logo" width="200" height="200" src="../assets/ITS.png" />
    <br>
      <ul>
    <li>
    <h3>Cari Mahasiswa ITS</h3>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <br>
    <b-button variant="primary">Enter</b-button>
    </li>
    </ul>
    <JadwalKuliah msg="Mata Kuliah Semester 6" />
  </div>
</template>

<script>
import JadwalKuliah from "@/components/JadwalKuliah.vue";
export default {
  name: "test",
  components: {
    JadwalKuliah
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
