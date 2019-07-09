<template>
    <div id="main">
        <h2 class="header"> Further Information: </h2>
        <div class="grid">
          <b><img src="../../public/wiki_logo.png" alt="wikipedia logo"></b>
          <b><img src="../../public/history_icon.png" alt="history website icon"></b>
          <b><img src="../../public/flipboard.jpg" alt="biography website icon"></b>
          <b><a href="https://en.wikipedia.org/wiki/Genghis_Khan"> Genghis Khan's Wikipedia page</a></b>
          <b><a href="https://www.history.com/topics/china/genghis-khan"> History page for Genghis Khan</a></b>
          <b><a href="https://www.biography.com/dictator/genghis-khan"> Genghis Khan biography</a></b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style scoped>

#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.grid {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 30px;
  }
.grid b {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  font-size: 25px;
}

h2 {
  text-align: center;
}

.header {

}

</style>
