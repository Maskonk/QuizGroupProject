<template lang="html">


</template>

<script>
export default {
  name: 'questions',
  // props: ['questions']
  data(){
    return {
    questionsToAsk:[],
    questions_test:[
      {question: 'what day is it',
      answear: 'today'},
      {question: 'is this hard to do?',
      answear: 'yes'},
      {question: 'how hot is it day',
      answear: '18C'}
      ]
    };
  },
  methods: {
    getQuestions(){
    var numbQuestions = 5
    for(n=0, n > numbQuestions, n++)
      var filteredArray =
        this.questions_test.filter(function(item, pos){
        return this.questions_test.indexOf(item) === pos;
      })
    }
  }
}

var filteredArray = arr.filter(function(item, pos){
  return arr.indexOf(item)== pos;
</script>

<style lang="css" scoped>
</style>
