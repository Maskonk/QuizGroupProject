<template>
  <div>
    <h2>QUIZ TITLE</h2>
    <question v-for="question in questions" :question="question"></question>
  </div>
</template>

<script>
import Question from "@/components/Questions.vue";

export default {
  props: ["questions"],
  components: {
    "question": Question
  }
}
</script>

<style lang="css" scoped>
</style>
