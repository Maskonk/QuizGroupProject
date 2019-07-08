<template>
    <div>
        <h2> You scored {{score}} correct out of {{Object.keys(answers).length}} questions answered</h2>
        <p> {{}} </p>
    </div>
</template>

<script>
    export default {
        name: "result",
        props: ['answers'],
        data() {
          return {
              score: 0,
          }
        }
    }
</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
