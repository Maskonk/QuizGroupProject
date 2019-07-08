<template>
  <div id="app">
      <Navbar />
      <router-view :questions="questions" />
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

<style lang="css">

h1, h2, h3, h4 {
  margin: 80px;
}
</style>
