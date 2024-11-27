function app(_req, res) {
    res.write("Hello, World!")
    res.end()
}

exports.module = { app }