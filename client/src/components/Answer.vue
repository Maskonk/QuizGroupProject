
<template lang="html">
  <h1>Question</h1>
  <input type="radio" id="one" value="{{this.question.questionOption[1]}}"    v-model='question-answear'>
  <input type="radio" id="two" value="{{this.question.questionOption2]}}" v-model='question-answear'>
  <input type="radio" id="three" value="{{this.question.questionOption[3]}}" v-model='question-answear'>
  <input type="radio" id="four" value="{{this.question.questionOption[4]}}" v-model='question-answear'>
</template>


<script>
export default {
  name: 'answer',
  // props: ['questionsToAsk'],
  data(){
    return {
      'question-answer': null,
      'question': null,
    }
  },
  methods: {
    getQuestion() {
      var temp = questionsToAsk.splice(0, 1)
      return question = temp
    },
    checkQuestion(){
      if question-answear === this.question.correct_answear
      return true
      else false
    }


  }
}
</script>

<style lang="css" scoped>
</style>
