const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("hello word")
})

app.get("/api/something", (req, res) => {
  const something = {
    abc: "123",
    bcc: "2222"
  }
  res.send(something)
})

app.listen(port, ()=>{
  console.log(`server running on localhost:${port}`)
})
