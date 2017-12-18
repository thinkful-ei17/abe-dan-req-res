'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 
// https://skinny-page.glitch.me/?name=abe&place=thinkful.com&adverb=softly&adjective1=cold&adjective2=awesome&adjective3=evil&noun=heart
app.get('/', (req, res) => res.send(
  `There's a ${req.query.adjective1} new ${req.query.name} in ${req.query.place} and everyone's talking. Stunningly ${req.query.adjective2} and ${req.query.adverb} ${req.query.adjective3}, all the cool kids know it. However, ${req.query.name} has a secret - ${req.query.name}'s a vile vampire.Will it end with a bite, or with a stake through the ${req.query.noun}?`
))

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
