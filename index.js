
const http = require('http')

const route = require('./route')
const controller = require('./controller').create(route)

const server = http.createServer(controller)
const port = process.env.PORT || 3000

server.listen(port)

console.log(`Listening on port ${port}`)
