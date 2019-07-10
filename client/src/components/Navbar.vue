<template lang="html">
  <nav class="navbar">
    <ul>
      <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
      <li><router-link :to="{ name: 'learn' }">LEARN</router-link></li>
      <li><router-link :to="{ name: 'map' }">MAP</router-link></li>
      <li><router-link :to="{ name: 'quiz' }">QUIZ</router-link></li>
      <li><router-link :to="{ name: 'board' }">SCOREBOARD</router-link></li>
      <li><router-link :to="{ name: 'info' }">MORE READING</router-link></li>
      <li class='about'><router-link :to="{ name: 'about' }">HIRE US</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style lang="css" scoped>

/* Remove bullet points from list items */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* background colour */
.navbar {
  background-color: black;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  margin-top: 0;
  z-index: 10000;
}

/* Style the links inside the navigation bar */
.navbar a {
  font-family: helvetica;
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Align about to right side */
.about {
  float: right;
}

/* Colour changes with hover */
.navbar a:hover {
  background-color: white;
  color: black;
}


</style>
