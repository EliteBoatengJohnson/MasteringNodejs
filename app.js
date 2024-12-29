import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json);

app.post('/echo', (req, res) => {
    res.json(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})