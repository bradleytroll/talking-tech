const path = require('path');
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Assuming your routes are correctly set up in these files
const routes = require('./controllers/api/userRoutes'); // Make sure this path is correct
const postRoutes = require('./controllers/api/postRoutes');
const commentRoutes = require('./controllers/api/commentRoutes');

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

app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

// Use routes
app.use(routes);
app.use(postRoutes);
app.use(commentRoutes);

// Sync sequelize models and then start Express app
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
