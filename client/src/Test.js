const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', (req, res) => {
    res.send('Hello World')
  })


//  questions
// confused about what exactly to do with express -- is it as simple as creating a post function that will post some text to the page?
// havent been able to get express up and running and im still confused about all of these things we have to run simultaneiously 
