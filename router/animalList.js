const express = require('express');
const router = express.Router();
const Animal = require('../db/schema/animal')

router.post('/', async (req, res, next) => {
  try{
    const newAnimal = {
      type: 'cat',
      name: 'nabi',
      year: 1,
    };
  
    await Animal.create(newAnimal);
  
    res.send('success');
  }catch(err){
    next(err)
  }

});

router.get('/', async (req, res) => {
  const allAnimal = await Animal.find();
  res.send(allAnimal);
});

// router.get('/:name', async (req, res, next) => {
//   try{
//     const animal = await Animal.findOne({name: "efafdf"})
//     const animalNameAndYear = {
//       name: animal.name,
//       year: animal.year
//     }
//     res.json(animalNameAndYear)

//   }catch(err){
//     next(err)
//   }
// })

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Animal = require('../db/schema/animal')

// const addAnimal = async (req, res) => {
//   const newAnimal = {
//     type: 'cat',
//     name: 'nabi',
//     year: 1,
//   };

//   await Animal.create(newAnimal);

//   res.send('success');
// }

// const getAnimal = async (req, res) => {
//   console.log("animalList2")
//   const allAnimal = await Animal.find();
//   res.send(allAnimal);
// }

// router.post('/', addAnimal);

// router.get('/', getAnimal);

// module.exports = router;