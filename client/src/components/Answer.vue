<!-- this is all i can do untill questions prop is created  -->


<template lang="html">
    <div>
        <div v-for="answer in answers" v-on:change="select">
            <input type="radio" :name="question" :id="answer"> &nbsp;
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
            selected: null
        }
    },
    methods: {
        select(a){
            console.log(a)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
