<template lang="html">
  <div>
    <h4>{{question.question}}</h4>
    <answer :question="question.question" :answers="question.questionOption"></answer>
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
      const numberOfQuestionsSelected = 2; //this will be a v-bound property that the user inputs at on point
      var shuffledQuestions = this.shuffleArray(this.questions_test);
      var randomQuestions = shuffledQuestions.slice(0, numberOfQuestionsSelected);
      return this.questionsToAsk = randomQuestions;
    },
    shuffleArray(array){
      var counter = array.length;
      while (counter > 0 ){
        let index = Math.floor(Math.random() * counter);
        counter = counter - 1;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    }
  },
  mounted(){
    this.getQuestions();
  }
}


  </script>

  <style lang="css" scoped>
  </style>
