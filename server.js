'use strict';

const express = require('express');
const app = express();

// your code here!


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
