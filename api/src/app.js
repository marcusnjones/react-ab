const express = require('express');
const app = express();
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const mongoUrl = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_SERVICENAME}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`;
const seeder = require('./seed/seeder');
const graphqlSchema = require('./schema/index');
const graphqlResolvers = require('./resolvers/index');
const cors = require('cors');

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose has connected!');
  // TODO: check first that no documents exist before attempting to seed db
  seeder.seed();
});
mongoose.connection.on('disconnected', () => console.log('Mongoose has disconnected!'));

if (app.get('env') == 'production') {
  app.use(morgan('combined'));
  // app.use(morgan('common', { skip: function (req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.append('Access-Control-Allow-Methods', 'PATCH, POST, DELETE, GET');
  }
  next();
});

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
