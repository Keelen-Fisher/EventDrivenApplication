'use strict';

let eventDrive = require('../../eventDrive');

// module.exports = (payload) => {
//   console.log(`Order is being picked up: ${payload.orderId}`);
//   console.log(`Order is now in transit`, payload);
//   console.log(`Order is officially delivered, ${payload.order.orderId}`);
// };

eventDrive.on('PICKUP', pickupAndDeliver);


function pickupAndDeliver(payload) {
  setTimeout(() => {
    pickup(payload);
  }, 1000);

  setTimeout(() => {
    delivery(payload);
  }, 2000);

}

function pickup(payload) {
  // Log a message to the console: DRIVER: picked up <ORDER_ID>.
  console.log(`DRIVER: picked up: ${payload.orderId}`);
  // Emit an in-transit event to the Global Event Pool with the order payload.
  eventDrive.emit('IN-TRANSIT', payload);
}

function delivery(payload) {
  // Log a confirmation message to the console: DRIVER: delivered <ORDER_ID>.
  console.log(`DRIVER: delivered ${payload.orderId}`);
  // Emit a delivered event to the Global Event Pool with the order payload.
  eventDrive.emit('DELIVERY', payload);

}

module.exports = { pickup, delivery };
