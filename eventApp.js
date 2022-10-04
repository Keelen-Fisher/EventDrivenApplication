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
    time: chance.date(),
    store: chance.company(),
    orderId: chance.guid({version: 4}),
    name: chance.name(),
    address: chance.address(),
  };

  console.log('------------Starting a New order---------------------');
  eventDrive.emit('PICKUP', {order});
  eventDrive.emit('TRANSIT', {order});
  eventDrive.emit('DELIVERY', {order});
}, 5000);
