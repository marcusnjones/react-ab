const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./schema/index');
const graphqlResolvers = require('./resolvers/index');

const mongoose = require('mongoose');
const mongoUrl = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_SERVICENAME}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongoose has connected!'));
mongoose.connection.on('disconnected', () => console.log('Mongoose has disconnected!'));

const Seeder = require('./seed/seeder');
Seeder.seed();

if (app.get('env') == 'production') {
  app.use(morgan('common'));
  // app.use(morgan('common', { skip: function (req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: (app.get('env') == 'production') ? false : true
}));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.append('Access-Control-Allow-Methods', 'PATCH, POST, DELETE, GET');
  }
  next();
});

// app.use('/api/entry', entryRoutes);
// app.use('/api/entries', entriesRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;
