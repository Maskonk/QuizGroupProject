<!-- this is all i can do untill questions prop is created  -->


<template lang="html">
    <div>
        <div v-for="answer in answers">
<!--            <p>{{answer}}</p>-->
            <input type="radio" :name="question" :id="answer" value="apples"> &nbsp;
            <label :for="answer">{{answer}}</label>
        </div>
    </div>
</template>


<script>
export default {
<<<<<<< HEAD
  name: 'answer',
  props: ['question'],
  data(){
    'question-answer': null
  }
=======
    name: 'answer',
    props: ['question', 'answers'],
    data() {
        return {
            'question-answer': null
        }
    }
>>>>>>> 3481547cc66c0d0ed17f6daf508ad96d3ebc25b1
}
</script>

<style lang="css" scoped>
</style>
