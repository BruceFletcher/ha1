
const url = require('url')

const controller = router => {
  return (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const data = {
      method: req.method.toLowerCase(),
      path: parsedUrl.pathname.replace(/(^\/+|\/+$)/g, ''),
      param: parsedUrl.query,
    }
    const handler = router.selectHandler(data)

    handler(data, (handlerStatus, handlerPayload) => {
      const status = typeof handlerStatus === 'number' ? handlerStatus : 200
      const payload = typeof handlerPayload === 'object' ? handlerPayload : {}
      const paystr = JSON.stringify(payload)

      res.setHeader('Content-Type', 'application/json')
      res.writeHead(status)
      res.end(paystr)

      console.log('Returning:', status, paystr)
    })
  }
}

module.exports = {
  create: controller
}
