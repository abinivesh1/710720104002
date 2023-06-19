const express = require("express");
const app = express();

app.use(express.json());

const oddnumbs = [];
const evennumbs = [0];
const primenumbs = [];
const fibonumbs = [0, 1];

var i = 0;

app.get("/numbers/fibonumbs/:n", (req, res) => {
  const n = req.params.n;

  //for fibo
  for (i = 2; i <= n; i++) {
    fibonumbs[i] = fibonumbs[i - 1] + fibonumbs[i - 2];
  }
  res.json(fibonumbs);
});


app.get("/numbers/evennumbs/:n", (req, res) => {
  const n = req.params.n;
  //even
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evennumbs.push(i);
    }
  }
  res.send(evennumbs);
});

app.get("/numbers/oddnumbs/:n", (req, res) => {
  const n = req.params.n;
  //odd
  for (i = 1; i < n; i++) {
    if (i % 2 != 0) {
      oddnumbs.push(i);
    }
  }
  res.send(oddnumbs);
});

app.listen(3000);