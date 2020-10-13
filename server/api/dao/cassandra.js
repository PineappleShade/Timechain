const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'localhost',
  keyspace: 'timesheet_keyspace'
});