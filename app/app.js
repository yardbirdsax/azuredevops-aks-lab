import express from 'express';
import { getResponse } from './api';
const app = express();

const port = process.env.node_port ? process.env.node_port : 3000;

app.get('/', (req,res) => {
    const response = getResponse();
    res.send(response)
});

app.listen(port,() => console.log(`Application is listening on port ${port}.`));