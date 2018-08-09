
const helloAction = require('./action/hello')
const pingAction = require('./action/ping')

const notFoundAction = (data, done) => {
  done(404, {status: 'error', message: 'resource not found'})
}

const routes = {
  get: {
    ping: pingAction,
    hello: helloAction,
  },
  any: {
  },
}

const selectHandler = ({method, path}) => {
  return (routes[method] && routes[method][path]) || routes.any[path] || notFoundAction
}

module.exports = {
  selectHandler
}
