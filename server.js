const path = require('path');
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const exhbs = require('express-handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Assuming your routes are correctly set up in these files
const routes = require('./controllers/'); 
const postRoutes = require('./controllers/api/postRoutes');
const commentRoutes = require('./controllers/api/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
	secret: 'your_secret_key',
	cookie: {
		maxAge: 3000000,
		httpOnly: true,
		secure: false,
		sameSite: 'strict',
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

const hbs = exhbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server now listening on port ${PORT}!!`);
	sequelize.sync({ force: false });
});