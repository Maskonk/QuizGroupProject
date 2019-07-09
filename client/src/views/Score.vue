<template>
    <div>
        <h2> You scored {{totalScore(this.answers)}} correct out of {{Object.keys(answers).length}} questions answered</h2>
        <h3>Correct Answers:</h3>
        <ol>
          <li v-for="(question, index) in answers" :question="question" :key="index">{{index}}<br><br>Your answer: {{question.userAnswer}}<br><br>Correct Answer: {{question.correctAnswer}}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "result",
        props: ['answers'],
        data() {
          return {
              score: 0,
          }
        },
        methods: {
          totalScore(array) {
            let sum = 0
            for (const answer in this.answers) {
              if (answer.selected === answer.correct) {
                sum += 1;
                }
              }
            return sum
          }
        }
  }
</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
