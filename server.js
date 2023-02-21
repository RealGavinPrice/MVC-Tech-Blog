//path
const path = require('path');
//dot env for sensitive info
require('dotenv').config();
// express server
const express = require('express');
// routes
const routes = require('./controller');
// sequelize
const sequelize = require('./config/connection');
// handlebars
const expHandlebars = require('express-handlebars');
// session cookies
const session = require('express-session');
// sequelize store for persistent session storage
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// helpers
const helpers = require('./util/helpers');


// handlebars for templates
const handlebars = expHandlebars.create({ helpers });

// Sessions init
const sesh = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
  };



const app = express();
const PORT = process.env.PORT || 3001;


// Inform Express.js which template engine we're using
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Express session for session handling
app.use(session(sesh));
// path to routes for server
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!!`));
});