<template lang="html">
  <table>
    <thead>
      <tr>
        <th>something</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{Scores}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'board',
  data(){
    return {
      Scores: null
    };
  },
  mounted(){
    function getScore() {
      const baseURL = "http://localhost:3000/api/players/"
      return fetch(baseURL)
      .then(res => res.json())
      .then(data => this.Scores = data)
    }
  }
}
</script>
<style lang="css" scoped>

table {
  margin: 200px;
}
</style>
