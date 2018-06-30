<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>

      <li>
        <router-link to="/hello_world" replace>Hello World</router-link>
      </li>
      <li>
        <router-link to="/other">Other</router-link>
      </li>
      <li>
        <button @click="handleButtonClick">Button</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Router from 'vue-router'
export default {
  name: 'RouterDemo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleButtonClick (e) {
      const router = new Router()

      router.push('hello_world')
    }
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
