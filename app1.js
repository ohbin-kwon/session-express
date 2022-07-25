// 아주 간단하게 http 프로토콜을 이용한 api 서버를 만들수 있다.
const express = require('express')
const app = express()
const port = 3000

app.listen(3000, ()=>{
  console.log(`server running on localhost:${port}`)
})

//익명함수