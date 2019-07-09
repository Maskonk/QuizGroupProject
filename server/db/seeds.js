use khan;
db.dropDatabase();

db.players.insertMany([
  {
    name:"John",
    score:"10"
  },
  {
    name:"Rory",
    score:"2"
  },
  {
    name:"Ghengis",
    score:"6"
  }
]);
