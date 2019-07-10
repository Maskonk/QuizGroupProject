<template>
  <div id="main">
    <h1>QUIZ TIME!</h1>
    <div class="container">
      <question v-for="question in questions" :question="question"></question>
      <button><router-link :to="{ name: 'score' }">Submit answer</router-link></button>
    </div>
  </div>
</template>

<script>
import Question from "@/components/Questions.vue";

export default {
  props: ["questions"],
  components: {
    "question": Question
  },
  methods: {
    apples(event) {
      // event.preventDefault();
      console.log(event)
    }
  }
}
</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.container{
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
}

button {
  margin: 0 auto;
  margin-top: 35px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left:40px;
  padding-right:40px;
  background-color: black;
  margin-left: 500px;
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
  font-size: 25px;
}

h1 {
  text-align: center;
  margin-bottom: 0px;
}

</style>
