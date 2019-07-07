<template lang="html">
  <nav>
    <router-link :to="{ name: 'home' }">Homepage</router-link>
    <!-- <router-link :to="{ name: 'learn' }">Learn</router-link>
    <router-link :to="{ name: 'quiz' }">Quiz</router-link>
    <router-link :to="{ name: 'score' }">Score</router-link> -->
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
