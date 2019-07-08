<template lang="html">
<div id="main">
  <h1>The Team</h1>
    <div class="grid">
      <img src="../../public/john.png" alt="John">
      <img src="../../public/kyle.png" alt="Kyle">
      <img src="../../public/michal.png" alt="Michal">
      <img src="../../public/rory.png" alt="Rory">
      <h3>John</h3>
      <h3>Kyle</h3>
      <h3>Michal</h3>
      <h3>Rory</h3>
    </div>
</div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style lang="css" scoped>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  align-items: stretch;
  justify-items: stretch;
  }
.grid img {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  max-width: 100%;
}

h1 {
  text-align: center;
  margin: 80px;
}

h3 {
  text-align: center;
  margin: 10px;
}

</style>
