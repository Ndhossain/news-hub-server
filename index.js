const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require('./data/categories.json');
const allNews = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News Api Running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const selected = req.params.id === '08' ? allNews : allNews.filter((news) => news.category_id === req.params.id);
    res.send(selected);
})

app.get('/news/:id', (req, res) => {
    const selected = allNews.find((news) => news._id === req.params.id);
    res.send(selected)
})

app.listen(port, () => {
    console.log('News Hub Server Running');
})
