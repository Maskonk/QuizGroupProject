<template>
  <div id="app">
      <Navbar />
      <header title="CodeKhan"/>
      <router-view />
      <answer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Answer from './components/Answer'

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
      Answer

    }
}
</script>

<style lang="css" scoped>
</style>
