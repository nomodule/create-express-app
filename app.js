const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', indexRoute);
app.use('/users', usersRoute);

const PORT = 3000 || process.ENV.port;
app.listen(PORT, () => {
    console.log(`Server started listening at post ${PORT}`);
})