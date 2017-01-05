var mongoose = require('mongoose');
var connectionString = 'mongodb://WRITE_YOUR_CONNECTION_STRING'

if ( connectionString == 'mongodb://WRITE_YOUR_CONNECTION_STRING') {
  console.log('Please change connection string in the main.js');
  return;
}

testCode();

function testCode() {

  mongoose.connect(connectionString);

  var Cat = mongoose.model('TestCat', { name: String });

  Cat.remove( {}).then( res => {

    var japanese = new Cat({ name: 'コード' });
    japanese.save(function (err, result) 
    {
      if (err) return console.error(err);

      Cat.findById(result._id).then( res => {

        console.log('-- when create ---');
        console.log(res);
        console.log('-- it is ok ---');

        Cat.update( {_id:res._id}, { name:'コード' }).then( res => {          
            Cat.find(function (err, kittens) {

              if (err) return console.error(err);

              console.log('-- when update ---');
              console.log(kittens);
              console.log('-- it is strange--');
            })
          }
        )
      })
    });

  })
};