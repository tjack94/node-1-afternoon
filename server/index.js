var express = require('express')
var bodyParser = require('body-parser')
var mc = require('./controllers/messages_controller')

var app = express()
app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

app.get('/api/messages',mc.read)
app.post('/api/messages',mc.create)
app.put('/api/messages/:id',mc.update)
app.delete('/api/messages/:id', mc.delete)

var port = 3000
app.listen(port, ()=> {console.log(`Listening on port ${port}`)})