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

app.post('/api/animal', async (req, res) => {
  console.log(req.body)
  //1
  const {type, name, year} = req.body
  // console.log(type, name, year)
  console.log(type, name, year)
  const newAnimal = {type, name, year}
  console.log(newAnimal)

  // 2
  // const newAnimal = {type: type, name: name, year: year}

  // await Animal.create(newAnimal)

  res.send("success")
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
