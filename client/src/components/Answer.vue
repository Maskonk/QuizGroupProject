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
    name: 'answer',
    props: ['question', 'answers'],
    data() {
        return {
            'question-answer': null
        }
    }
}
</script>

<style lang="css" scoped>
</style>
