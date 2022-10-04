'use strict';

let eventDrive = require('../eventDrive');

module.exports = (payload) => {
  console.log(`Order is being picked up: ${payload.orderId}`);
  console.log(`Order is now in transit`, payload);
  console.log(`Order is officially delivered, ${payload.order.orderId}`);
};
