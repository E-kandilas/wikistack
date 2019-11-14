const express = require('express');
const app = express();
const port = 3000;


// app.use(express.static('public'))

app.get('/', (rec, res, next) => {
  res.send("sending from /")
})



app.listen(port, () => console.log(`listening on port ${port})`)