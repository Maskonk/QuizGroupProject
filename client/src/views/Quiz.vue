<template>
  <div>
    <h2>QUIZ TITLE</h2>
    <form method="POST" action="Score.vue" v-on:submit="apples">
    <question v-for="question in questions" :question="question"></question>
    <input type="submit" value="Submit answers">
    </form>
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
      event.preventDefault();
      console.log(event)
    }
  }
}
</script>

<style lang="css">
</style>
