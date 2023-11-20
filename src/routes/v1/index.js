const express = require('express');

const { TicketController } = require('../../controller/index');

const router = express.Router();

router.post('/tickets', TicketController.create);

module.exports = router;