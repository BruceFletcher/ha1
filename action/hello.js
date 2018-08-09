
const handler = (data, done) => {
  const name = typeof data.param.name === 'string' ? data.param.name : 'world'

  done(200, {status: 'success', data: {message: `Hello, ${name}!`}})
}

module.exports = handler
