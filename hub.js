'use strict';

let eventDrive = require('./caps/eventDrive');

//-----handlers-----//
require('./caps/clients/vendor/vendorHandler.js');
require('./caps/clients/driver/driverhandler.js');

//-----listeners-----//
// Listens to ALL events in the Event Pool.
eventDrive.on('PICKUP', (payload) => logger('PICKUP', payload));
eventDrive.on('TRANSIT', (payload) => logger('TRANSIT', payload));
eventDrive.on('DELIVERY', (payload) => logger('DELIVERY', payload));


// Logs a timestamp and the payload of every event.
function logger(event, payload) {
  const timestamp = new Date();
  console.log('EVENT:', {event, timestamp, payload});
}
