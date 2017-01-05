var mongoose = require('mongoose');
var connectionString = 'mongodb://ubn:1QaZxCvB@ds038739.mlab.com:38739/flow-test-ls'

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
    japanese.save( (err, result) =>
    {
      if (err) return console.error(err);

      Cat.findById(result._id).then( res => {

        console.log('-- when create ---');
        console.log(res);
        console.log('-- it is ok ---');

        Cat.update( {_id:res._id}, { name:'コード' }).then( res => {          
            Cat.find( (err, kitten) => {

              if (err) return console.error(err);

              console.log('-- when update ---');
              console.log(kitten);
              console.log('-- it is strange--');
            })
          }
        )
      })
    });

  })
};