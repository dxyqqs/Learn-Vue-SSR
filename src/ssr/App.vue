<template>
  <div id='app'>
    <Title :title='text'></Title>
    <button @click='handleClick' class='button'>Click</button>
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
<style>
  #app{
    border:2px solid #f00
  }

</style>