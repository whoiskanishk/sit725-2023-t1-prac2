const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1) + parseInt(num2);
    res.send(`The sum is ${result}`);
});


app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1) - parseInt(num2);
    res.send(`The difference is ${result}`);
});
app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});