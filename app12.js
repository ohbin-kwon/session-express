// 아주 간단하게 http 프로토콜을 이용한 api 서버를 만들수 있다.
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const connect = require('./db/index');
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-html-unlencoded
app.use(express.json()); // for parsing application/json
connect();
const indexRouter = require('./router/index')
const errorhandler = require('./middleware/errorhandler')

app.use("/api", indexRouter)
app.use(errorhandler)

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
