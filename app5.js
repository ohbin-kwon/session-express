// 아주 간단하게 http 프로토콜을 이용한 api 서버를 만들수 있다.
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const connect = require('./db/index');
const Animal = require('./db/schema/animal');

app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-html-unlencoded
app.use(express.json()); // for parsing application/json
connect();

// practice query, params, body
app.get('/api/animal', async (req, res) => {
  console.log("query", req.query)
  console.log("params", req.params)
  console.log("body", req.body)

  const {type} = req.query
  // const {name} = req.params
  // const {name} = req.body

  const animal = await Animal.find({type})

  res.send(animal)
});

app.get('/api/animal/:animalid/baby/:babyid', async (req, res) => {
  console.log("query", req.query)
  console.log("params", req.params)
  console.log("body", req.body)

  // const {type} = req.query
  const {name} = req.params
  // const {name} = req.body

  const animal = await Animal.findOne({name})

  res.send(animal)
});

app.post('/api/animal', async (req, res) => {
  console.log("query", req.query)
  console.log("params", req.params)
  console.log("body", req.body)

  // const {name} = req.query
  // const {name} = req.params
  const newAnimal = {...req.body}

  await Animal.create(newAnimal)

  res.send("success")
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
