import express  from "express";
import  bodyParser from 'body-parser';

const app=express();

import path from 'path';

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

import charctersRoute from './controllers/characters.js';
app.use('/characters',charctersRoute);

import episodesRoute from './controllers/episodes.js';
app.use('/episodes',episodesRoute);

import quotesRoute from './controllers/quotes.js';
app.use('/quotes',quotesRoute);

const port =3001;

app.listen(port,function(){
    console.log(`${port} is working great!`);
})
