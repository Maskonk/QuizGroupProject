<template lang="html">
    <div>
        <div v-for="answer in answers" v-on:change="select">
            <input type="radio" :name="question" :id="answer" :value="answer"> &nbsp;
            <label :for="answer">{{answer}}</label>
        </div>
    </div>
</template>


<script>
    import {eventBus} from "@/main";
    export default {
    name: 'answer',
    props: ['question', 'answers', 'correct'],
    data() {
        return {
            selected: null
        }
    },
    methods: {
        select(a){
            eventBus.$emit('answer-selected', {question: this.question, selected: a.target.value, correct: this.correct})
        }
    }
}
</script>

<style lang="css" scoped>
</style>
