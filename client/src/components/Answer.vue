<template lang="html">
    <div>
        <div class="container" v-for="answer in answers" v-on:change="select">
            <input type="radio" :name="question" :id="answer" :value="answer">
            <label :for="answer">{{answer}}</label>
            <span class="radiobutton"></span>
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
            eventBus.$emit('answer-selected',
                {question: this.question, selected: a.target.value, correct: this.correct})
        }
    }
}
</script>

<style lang="css" scoped>

[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #black;
}


[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 15px;
    height: 15px;
    background: salmon;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;

}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

label {
  /* padding-right: 50px; */
  border: 50px;
}

.container {
  width: 650px;
  border-bottom: 5px solid grey;
  padding: 30px;
  margin: 60px;
  padding-right: 300px;
}


</style>
