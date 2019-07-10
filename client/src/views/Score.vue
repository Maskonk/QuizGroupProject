<template>
    <div>
        <div v-if="Object.keys(answers).length === numberOfQuestions">
        <h2> You scored {{totalScore}} correct out of {{Object.keys(answers).length}} questions answered</h2>
        <input type="text" v-model="playerName">
<!--        <input type="submit" v-on:click="postScore">-->
            <button v-on:click="postScore"><router-link :to="{ name: 'board' }">Submit answer</router-link></button>
        <h3>Correct Answers:</h3>
        <ol>
            <div v-for="(question, index) in answers" :question="question" :key="index">
          <li v-if="question.userAnswer === question.correctAnswer">{{index}} <span style="color: green">Correct</span><br>Correct Answer: {{question.correctAnswer}}<br><br></li>
          <li v-else>{{index}} <span style="color: red">Incorrect</span><br>Your answer: {{question.userAnswer}}<br>Correct Answer: {{question.correctAnswer}}<br><br></li>
            </div>
        </ol>
        </div>
        <div v-else>
            <h2> Please complete the quiz. </h2>
        </div>

    </div>
</template>

<script>
    export default {
        name: "result",
        data(){
          return {
            playerName:""
          }
        },
        props: ['answers', 'numberOfQuestions'],
        computed: {
          totalScore: function() {
            let sum = 0;
            const answersToArray = Object.entries(this.answers)
            for (const entry of answersToArray) {
              if (entry[1].userAnswer === entry[1].correctAnswer) {
                sum += 1;
                }
              }
            return sum
          }
        },
          methods: {
            postScore(evt){
              evt.preventDefault();
              var payload = {name: this.playerName, score: this.totalScore};
              const baseURL = 'http://localhost:3000/api/players/';
              return fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {'Content-Type':'application/json'}
              })
              .then(res => res.json())
            }
          }
        }

</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

button {
    background-color: black;
}

button:hover {
    background-color: #e33333;
    color: white;
}

a:link {
    color: white;
}

a:visited {
    color: white;
}

a {
    text-decoration: none;
}

</style>
