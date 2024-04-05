const path = require('path');
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const routes = require('./controllers/routes');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
}
);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
}   );
