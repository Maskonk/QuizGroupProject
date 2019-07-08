<template lang="html">
  <div>
    <h4>{{question.question}}</h4>
    <answer :question="question.question" :answers="question.questionOption" v-model="apples"
            :correct="question.correct_answer"/>
  </div>

</template>

<script>
import Answer from "./Answer";
export default {
  name: 'questions',
  components: {Answer},
  props: ['question'],
  data(){
    return {
      apples: []
    };
  }
}


</script>

<style lang="css" scoped>
</style>
