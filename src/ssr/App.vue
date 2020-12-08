<template>
  <div id='app'>
    <h1>{{text}}</h1>
  </div>
</template>
<script>
export default {
  name: "App",
  inheritAttrs: false,
  props: {},
  data () {
    return {
      text:'Hello World'
    }
  },
  computed: {
  },
  methods: {
  },
  created () {}
}
</script>
