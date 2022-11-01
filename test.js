// function outer() {
//   let a = 1;
//   let inner = function (b) {
//     return a + b
//   }
//   return inner
// }

// const abc = outer() // inner
// console.log(abc(3))
// console.log(abc(5))
// Array.prototype.map = function(){
//   console.log(this.join(''))
// }
// const array = ["a", "b"]
// array.map()

class warrior {
  attack () {
    return "칼로 공격"
  }
}
class magician {
  attack () {
    return "마법으로 공격"
  }
}

function fightWithMonster (job) {
  console.log(job.attack())
}
const warrior1 = new warrior()
const warrior2 = new warrior()
const warrior3 = new warrior()
const magician1= new magician()
const magician2= new magician()
const array = [warrior1, warrior2, magician1]
array.forEach((job) => fightWithMonster(job))

