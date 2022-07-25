const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://127.0.0.1:27018', { dbName:'test', user:'test', pass:'test' })
    .then(
      _ => console.log('successfully opened the database')
    )
    .catch(
      e => console.log('error occurred while connecting \n', e)
    )
}

module.exports = connect


