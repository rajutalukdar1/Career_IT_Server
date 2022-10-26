const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const categories = require('./data/categories.json')
const courseDetails = require('./data/course.details.json')
app.use(cors());

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})


app.listen(port, () => {
    console.log('assignment server', port)
})

app.get('/courseDetails/:id', (req, res) => {
    const id = req.params.id;
    const courseDetail = courseDetails.find(c => c.id === id)
    res.send(courseDetail)
})

