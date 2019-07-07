<!-- this is all i can do untill questions prop is created  -->


<template lang="html">
<h1>Question</h1>
<input type="radio" id="one" value=""    v-model='question-answear'> <!-- "value" will require quiz question.vue  -->
<input type="radio" id="two" value="" v-model='question-answear'>
<input type="radio" id="three" value="" v-model='question-answear'>
<input type="radio" id="four" value="" v-model='question-answear'>
</template>


<script>
export default {
  name: 'answer',
  props: ['question'],
  data(){
    'question-answer': null
  }
}
</script>

<style lang="css" scoped>
</style>
