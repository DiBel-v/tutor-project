const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const router = express.Router();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


app.listen(port, () => console.log(`Server started on port ${port}`));