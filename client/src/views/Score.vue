<template>
    <div>
        <div v-if="Object.keys(answers).length === numberOfQuestions">
        <h2> You scored {{totalScore(this.answers)}} correct out of {{Object.keys(answers).length}} questions answered</h2>
        <h3>Correct Answers:</h3>
        <ol>
            <div v-for="(question, index) in answers" :question="question" :key="index">
          <li v-if="question.userAnswer === question.correctAnswer">{{index}}<br>Correct Answer: {{question.correctAnswer}}<br><br></li>
          <li v-else>{{index}}<br>Your answer: {{question.userAnswer}}<br>Correct Answer: {{question.correctAnswer}}<br><br></li>
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
        props: ['answers', 'numberOfQuestions'],
        methods: {
          totalScore(array) {
            let sum = 0;
            const answersToArray = Object.entries(this.answers)
            for (const entry of answersToArray) {
              if (entry[1].userAnswer === entry[1].correctAnswer) {
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
