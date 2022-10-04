'use strict';

const eventDrive = require('./caps/eventDrive');
const vendorHandler = require('./caps/handlers/vendor');
const driverHandler = require('./caps/handlers/driver');
const Chance = require('chance');

const chance = new Chance();

eventDrive.on('PICKUP', driverHandler);
eventDrive.on('TRANSIT', vendorHandler);
eventDrive.on('DELIVERY', driverHandler);

setInterval(() => {
  const order = {
    store: chance.company(),
    orderIder: chance.guid({version: 4}),
    name: chance.name(),
    address: chance.address(),
  };

  console.log('------------Starting a New order---------------------');
  eventDrive.emit('PICKUP', {order});
  eventDrive.emit('DELIVERY', {order});
  eventDrive.emit('')
}, 5000);
