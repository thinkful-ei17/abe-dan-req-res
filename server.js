'use strict';

const express = require('express');
const app = express();

app.get('/:what', (req, res) =>
{console.log(req.query);    
    res.send  ({
  
        'host': req.hostname,
        'query': req.query,
        'params': req.params
    });});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
