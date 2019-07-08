<template>
  <div id="app">
      <Navbar />
      <header title="CodeKhan"/>
      <router-view />
<<<<<<< HEAD
      <answer />
=======
      <questions />
>>>>>>> development
  </div>
</template>

<script>
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Answer from './components/Answer'
=======
import Questions from './components/Questions'
>>>>>>> development

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
<<<<<<< HEAD
      Answer

=======
      'questions':Questions
>>>>>>> development
    }
}
</script>

<style lang="css" scoped>
</style>
