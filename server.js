const http = require('http')
const { app } = require('./main.js')

const server = http.createServer(app)

server.listen(3000, (error) => {
    if (error != null) {
    console.log(error)
    } else {
        console.log("server is running!")
    }
})