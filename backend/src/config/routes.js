const express = require('express')

module.exports = function(server) {
    // URL base
    const router = express.Router()
    server.use('/api', router)

    // Cicly routes
    const BillingCycleService = require('../api/billingCicly/billingCycleService')
    BillingCycleService.register(route, '/billingCycle')
}