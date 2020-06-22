const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
  const posts = [
     {id: 'asdfsdfsd', title: "First server side post!!!", content:"this coming from the server"},
     {id: 'asdfhadcc', title: "Second server side post!!!", content:"this coming asdfdsfdsfsdfsdfsdfsd the server"}
  ];
  res.status(200).json( {
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});


module.exports = app;

