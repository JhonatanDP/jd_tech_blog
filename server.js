const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'secrect',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});










// const path = require('path');
// const express = require('express');
// const routes = require('./controllers');
// const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({
//     helpers
// });
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: process.env.DB_SECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize,
//         checkExpirationInterval: 1000 * 60 * 10, // will check every 10 minutes
//         expiration: 1000 * 60 * 30 // will expire after 30 minutes
//     }),
// };

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(session(sess));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(routes);

// sequelize.sync();

// app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`);
// });