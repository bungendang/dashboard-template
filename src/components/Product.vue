<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Product</span>
      </md-app-toolbar>
      <md-app-content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam hic repellat reprehenderit?</p>
      </md-app-content>
    </md-app>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      msg: 'Product'
    }
  },
  methods: {
    getData () {
      console.log('asa')
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
