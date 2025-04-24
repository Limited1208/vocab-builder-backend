const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://minhkhoapham1208:yTedakhPy2F0fppz@cluster0.59zfgsm.mongodb.net/vocab-builder');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Vocab Builder RESTful API server started on: ${port}`);