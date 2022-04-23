var express = require('express')
var app = express()
var user = require('./user')

app.use(express.json())

app.get('/api/todos', user.list)

app.post('/api/todos', user.submit)

app.put('/api/todos/:id', user.update)

app.delete('/api/todos/:id', user.delete)

app.listen(3400);