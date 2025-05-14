const express = require('express');
const path = require('path');
const posts = require('./routes/posts');
const errorHandler = require('./middleware/error');
const notFound = require('./middleware/notFound');
const port = process.env.PORT || 8000

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(express.json());

//Routes
app.use('/api/posts', posts);



//Error handler middleware
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));