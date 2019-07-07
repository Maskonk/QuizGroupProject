<template>
  <div id="app">
      <Navbar />
      <header title="CodeKhan"/>
      <router-view />
      <questions /> 
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Questions from './components/Questions'

export default {
  name: "app",

  data(){
    return {
      questions: [{}

      ]
    }
  },
    components: {
      Navbar,
      'questions':Questions
    }
}
</script>

<style lang="css" scoped>
</style>
