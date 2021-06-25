const express = require("express");

const app = express();

app.get('/user', (req, res) => {
    res.status(200).json({
        "user": "ok"
    });
})
module.exports = app;
// app.listen(4000, () => {
//     console.log("listening at 4000");
// })