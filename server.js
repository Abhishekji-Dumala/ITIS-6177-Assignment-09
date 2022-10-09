const express = require("express");
const app = express();
const port = 3002;

const axios = require('axios').default;

var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/say", async (req, res) => {
    const urlToLambda = "https://5ygi7pq6c24cvbqnmjnxg3zsrq0elipb.lambda-url.us-east-1.on.aws/?keyword=" + req.query.keyword;
    console.log("inside");
    axios.get(urlToLambda)
        .then((response) => {
            res.send(response.data);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        })
});

app.listen(port, () => {
    console.log("Server starts lintening to port http://localhost:${port}");
});