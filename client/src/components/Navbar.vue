<template lang="html">
  <nav class="navbar">
    <ul>
      <li><router-link :to="{ name: 'home', params: {} }">HOME</router-link></li>
      <li><router-link :to="{ name: '', params: {} }">LEARN</router-link></li>
      <li><router-link :to="{ name: '', params: {} }">QUIZ</router-link></li>
      <li><router-link :to="{ name: '', params: {} }">SCORE</router-link></li>
      <li class="about"><router-link :to="{ name: 'about', params: {} }">ABOUT</router-link></li>
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
