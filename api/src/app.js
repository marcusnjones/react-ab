const express = require('express');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const rt = require('file-stream-rotator');
const Writable = require('stream').Writable;

const app = express();
const seed = require('./seed/seeder').seed;
const graphqlSchema = require('./schema/index');
const graphqlResolvers = require('./resolvers/index');

mongoose.connect(`mongodb://${process.env.MONGO_SERVICENAME}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`, {
  auth: {
    user: `${process.env.MONGO_INITDB_ROOT_USERNAME}`,
    password: `${process.env.MONGO_INITDB_ROOT_PASSWORD}`,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected',
    // TODO: Check first that no documents exist before attempting to seed db
    () => console.log('Mongoose has connected!'), seed(),
);
mongoose.connection.on('disconnected',
    () => console.log('Mongoose has disconnected!'),
);

if (app.get('env') === 'production') {
  const skipSuccess = (req, res) => res.statusCode < 400;
  const fileWriter = rt.getStream({
    filename: './errors/errors.log',
    frequency: 'daily',
    verbose: true,
  });
  app.use(morgan('combined', {
    skip: skipSuccess,
    stream: fileWriter,
  }));

  /**
   * Creates a writable stream for logging to the terminal.
   */
  class TerminalStream extends Writable {
    // eslint-disable-next-line require-jsdoc
    write(line) {
      console.log('[TerminalStream]:: ', line);
    }
  }
  const skipError = (req, res) => res.statusCode >= 400;
  const terminalWriter = new TerminalStream();
  app.use(morgan('combined', {
    skip: skipError,
    stream: terminalWriter,
  }));
} else {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
