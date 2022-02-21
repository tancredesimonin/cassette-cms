const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('LOCAL_DATABASE_FILENAME', '../../.tmp/data.db')),
    },
    useNullAsDefault: true,
    debug: env('LOCAL_DATABASE_DEBUG', false),
  },
});
