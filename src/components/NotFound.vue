<template>
  <div class="page-container">
    <div class="not-found-container">
      <h1 class="not-found">404</h1>
      <h2>
        Page Not Found
      </h2>
    </div>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: 'Profile'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-container{
  background-color: #FFF !important;
  z-index:100;
  // border-left-color:#eee;
  border-left:1px solid #ccc;
  .not-found-container{
    padding:100px;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
