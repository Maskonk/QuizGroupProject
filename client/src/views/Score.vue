<template>
    <div>
        <h2> You scored {{score}} out of questions.length</h2>
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        name: "result",
        props: ['questions'],
        data() {
          return {
              score: null
          }
        },
        mounted() {
          eventBus.$on('question-answered', () => {this.score += 1})
        }
    }
</script>

<style lang="css">
</style>
