<template lang="html">

  <nav class="menu">
    <h1>menu Component</h1>
  </nav>

</template>

<script lang="js">
  export default  {
    name: 'menu',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .menu {
      width: 250px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 999;
      background: #434343;
      color: #fff;
      transition: all 0.3s;
  }
</style>
