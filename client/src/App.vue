<template>
  <div id="app">
      <Navbar />
      <router-view :questions="getQuestions" :answers="answers" :numberOfQuestions="numberOfQuestions"/>
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
        answers: {},
        numberOfQuestions: 10
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
            let shuffledQuestions = this.shuffleArray(this.questions);
            return shuffledQuestions.slice(0, this.numberOfQuestions);
        }
    },
    mounted() {
        eventBus.$on('answer-selected', (data) =>
        this.answers[data.question] = {userAnswer: data.selected, correctAnswer: data.correct});
    }
}
</script>

<style lang="css">
html,body {
  margin: 0;
}

h1, h2, h3, h4 {
  margin: 80px;
}
#app {
  height: 100vh;
  width: 100vw;
}
</style>
