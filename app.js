const express = require('express');
var bodyParser = require('body-parser')
const app = express();
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
   
    
app.get('/admin', (req, res) => {
    const reject = () => {
        res.setHeader('www-authenticate', 'Basic')
        res.sendStatus(401)
      }
    
      const authorization = req.headers.authorization
    
      if(!authorization) {
        return reject()
      }
    
      const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')
    
      if(! (username === 'ben' && password === 'my-favorite-password')) {
        return reject()
      }
    
    //   res.send('Top secret stuff here')
    res.sendFile(__dirname + '/index.html');

  })
 
  app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
app.post('/admin', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
    
app.listen(3000);