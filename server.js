process.env.NODE_ENV = process.env.NODE_ENV || `development`;

let express = require(`express`);
let app = express();
module.exports = app;

app.use(`/`, function (req, res) {
  res.send(`Hello World`);
});

app.listen(3000);
console.log(`Server running at http://localhost:3000/`);
