const { Router } = require('express')
const rt = Router()

const { sendMessage } = require('../controller/message.controller')


rt.get("/", sendMessage)

module.exports = rt