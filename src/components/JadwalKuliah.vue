<template>
  <div class="jadwalkuliah">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <b-table hover :items="items"></b-table>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "jadwalkuliah",
  props: {
    msg: String
  },
    data() {
    return {
      items: [
        { Kode: 'IF184601', Matakuliah: 'Interaksi Manusia dan Komputer', SKS: 3, Kelas: 'C' },
        { Kode: 'IF184602', Matakuliah: 'Pemrograman Jaringan', SKS: 3, Kelas: 'C' },
        { Kode: 'IF184603', Matakuliah: 'Rekayasa Kebutuhan', SKS: 3, Kelas: 'A' },
        { Kode: 'IF184604', Matakuliah: 'Teori Graf dan Otomata', SKS: 3, Kelas: 'D' },
        { Kode: 'IF184605', Matakuliah: 'Pemrograman Berbasis Kerangka Kerja	', SKS: 3, Kelas: 'F' },
        { Kode: 'IF184935', Matakuliah: 'Game Cerdas', SKS: 3, Kelas: '-' },
        { Kode: 'IF184966', Matakuliah: 'Big Data', SKS: 3, Kelas: '-',_rowVariant: 'danger' },
        { Kode: 'TI184415', Matakuliah: 'Ekonomi Teknik', SKS: 3, Kelas: 'E',_rowVariant: 'warning' }
        // { umur: 21, first_name: 'Larsen', last_name: 'Shaw' },
        // {
        //   umur: 89,
        //   first_name: 'Geneva',
        //   last_name: 'Wilson',
        //   _rowVariant: 'danger'
        // },
        // {
        //   umur: 40,
        //   first_name: 'Thor',
        //   last_name: 'MacDonald',
        //   _cellVariants: { umur: 'info', first_name: 'warning' }
        // },
        // { umur: 29, first_name: 'Dick', last_name: 'Dunlap' }
      ]
    }
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
  padding: 10;
  margin: 0 20px;
}
</style>
