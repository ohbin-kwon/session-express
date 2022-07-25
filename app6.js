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

app.put('/api/animal/:name', async (req, res) => {
  console.log("params", req.params)
  console.log("body", req.body)

  const {name} = req.params
  const {year} = req.body

  await Animal.updateOne({ name }, { $set: { year } })

  res.send("success")
});

app.delete('/api/animal/:name', async (req, res) => {
  console.log("params", req.params)

  const {name} = req.params

  await Animal.deleteOne({name})
  
  res.send("success")
})


app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
