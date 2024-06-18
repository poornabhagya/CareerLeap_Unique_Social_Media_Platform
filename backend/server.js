const express = require('express');

const bodyParser = require('body-parser');

const usersRoutes = require('./routes/user-routes');

const postsRoutes = require('./routes/posts-routes');

const HttpError = require('./modules/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/posts',postsRoutes);
app.use('/api/users', usersRoutes);


app.use((req,res,next)=>{ //for route error 
  const error = new HttpError('Could not find this route.',404);
})

app.use((error, req, res, next) => {  //for somthing happen in code ex- PostMan displays message: DUMMY_POSTS are not valide 
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });

app.listen(5000);