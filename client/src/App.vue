<template>
  <div id="app">
      <Navbar />
      <header title="CodeKhan"/>
      <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: "app",

  data(){
    return {
      questions: [{}

      ]
    }
  },
    components: {
      Navbar
    }
}
</script>

<style lang="css" scoped>
</style>
