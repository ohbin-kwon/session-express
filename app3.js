// 아주 간단하게 http 프로토콜을 이용한 api 서버를 만들수 있다.
const express = require('express');
const app = express();
const port = 3000;
const connect = require('./db/index');
const Animal = require('./db/schema/animal');

connect();

app.post('/api/animal', async (req, res) => { // async

  const newAnimal = {
      type: 'cat',
      name: 'nabi111',
      year: 1,
  };

  const newAnimalRecorded =  await Animal.create(newAnimal)

  res.send(newAnimalRecorded)
});

app.get('/api/animal', async (req, res) => {
  const allAnimal = await Animal.find()
  res.send(allAnimal)
})

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
