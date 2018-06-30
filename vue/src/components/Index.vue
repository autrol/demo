<template>
  <div id="demo">{{ fullName }}
      <my-component></my-component>
  </div>
</template>

<script>
export default {
  el: '#demo',
  name: 'Index',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      loginType: ''
    }
  },
  components: {
    // <my-component> 将只在父组件模板中可用
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  },
  computed: {
    fullName: {
      // getter
      get () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    changeFirstname () {
      this.firstName = 'hello'
      this.loginType = this.loginType === 'username' ? '' : 'username'
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
