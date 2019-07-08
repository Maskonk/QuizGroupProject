<template>
  <div class="container" id="main">
    <h2>QUIZ TITLE</h2>
    <question v-for="question in questions" :question="question"></question>
    <button><router-link :to="{ name: 'score' }">Submit answer</router-link></button>
  </div>
</template>

<script>
import Question from "@/components/Questions.vue";

export default {
  props: ["questions"],
  components: {
    "question": Question
  },
  methods: {
    apples(event) {
      // event.preventDefault();
      console.log(event)
    }
  }
}
</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
