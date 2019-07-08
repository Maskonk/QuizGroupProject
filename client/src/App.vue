<template>
  <div id="app">
      <Navbar />
      <router-view :questions="getQuestions" :answers="answers"/>
  </div>
</template>

<script>
import {eventBus} from "./main";
import Navbar from './components/Navbar'
import Questions from './components/Questions'
import {questions} from "./questions";


export default {
  name: "app",

  data(){
    return {
        questions: questions,
        answers: {}
    }
  },
    components: {
      Navbar,
      Questions
    },
    methods: {
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
    computed: {
        getQuestions: function(){
            const numberOfQuestionsSelected = 10; //this will be a v-bound property that the user inputs at on point
            let shuffledQuestions = this.shuffleArray(this.questions);
            return shuffledQuestions.slice(0, numberOfQuestionsSelected);
        }
    },
    mounted() {
        eventBus.$on('answer-selected', (data) =>
        {this.answers[data.question] = {userAnswer: data.selected, correctAnswer: data.correct};
            console.log('in the method', this.answers)});
        console.log('second', this.answers)
    }
}
</script>

<style lang="css">

h1, h2, h3, h4 {
  margin: 80px;
}
</style>
