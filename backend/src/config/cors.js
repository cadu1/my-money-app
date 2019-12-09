module.exports = (req, res, next) => {
    res.header('Access-Control-Allowed-Origin', '*')
    res.header('Access-Control-Allowed-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
    res.header('Access-Control-Allowed-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    next()
}