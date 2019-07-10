<template lang="html">
  <table align="center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="score in Scores">
        <td>{{score.name}}</td>
        <td>{{score.score}}</td>
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
  methods: {
    getScore:
            function () {
              const baseURL = "http://localhost:3000/api/players/";
              return fetch(baseURL)
                      .then(res => res.json())
                      .then(data => this.Scores = data)
            }
  },
  mounted(){
    this.getScore()
  }
}
</script>
<style lang="css" scoped>

table {
  width: 40%;
  margin-top: 10%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 22px;
  text-align: left;
}

th, td {
  padding: 15px;
  text-align: left;
}

tr:hover {
  background-color: #e33333;
}

</style>
