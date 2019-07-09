<template>
  <div id="main">
    <h2>QUIZ TIME!</h2>
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
  padding-bottom: 5px;
  padding-left:40px;
  padding-right:40px;
  background-color: salmon;
}

h2 {
  text-align: center;
}


</style>
