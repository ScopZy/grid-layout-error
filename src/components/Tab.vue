<template lang="html">
 <div class="component-tab">
   <table class="table">
     <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">First</th>
       <th scope="col">Last</th>
       <th scope="col">Handle</th>
     </tr>
     </thead>
     <tbody>
     <tr>
       <th scope="row">1</th>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>
     <tr>
       <th scope="row">2</th>
       <td>Jacob</td>
       <td>Thornton</td>
       <td>@fat</td>
     </tr>
     <tr>
       <th scope="row">3</th>
       <td>Larry</td>
       <td>the Bird</td>
       <td>@twitter</td>
     </tr>
     </tbody>
   </table>
 </div>
</template>

<script lang="js">
  export default  {
    name: 'Tab',
    props: ['item', 'showBtn'],
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
  .component-tab{

  }
</style>
