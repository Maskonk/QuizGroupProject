<template>
  <div id="app">
      <Navbar />
      <header title="CodeKhan"/>
      <router-view :questions="questions" />
      <Questions />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Questions from './components/Questions'
import {questions} from "./questions";

export default {
  name: "app",

  data(){
    return {
        questions: questions
    }
  },
    components: {
      Navbar,
      Questions
    }
}
</script>

<style lang="css" scoped>
</style>
