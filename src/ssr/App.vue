<template>
  <div id='app'>
    <Title :title='text'></Title>
    <button @click='handleClick'>Click</button>
  </div>
</template>
<script>
import Title from "@components/Title";
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
    handleClick(){
      alert(11111)
    }
  },
  created () {},
  components:{
    Title
  }
}
</script>
