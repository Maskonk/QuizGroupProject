<template>
  <div id="app">
      <Navbar />
      <header title="CodeKhan"/>
      <questions />
=======
      <router-view :questions="questions" />
      <Questions />
>>>>>>> 5fa406504665fe6b5c9e13016d59b51a14e168ae
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Questions from './components/Questions'
<<<<<<< HEAD
=======
import {questions} from "./questions";
>>>>>>> 5fa406504665fe6b5c9e13016d59b51a14e168ae

export default {
  name: "app",

  data(){
    return {
        questions: questions
    }
  },
    components: {
      Navbar,
      'questions':Questions
=======
      Questions
>>>>>>> 5fa406504665fe6b5c9e13016d59b51a14e168ae
    }
}
</script>

<style lang="css" scoped>
</style>
