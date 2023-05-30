'use strict';

let eventDrive = require('../../eventDrive');

module.exports = (payload) => {
  console.log(`It has been taken care of, thank you for your coorperation ${payload.order.name}`);
};
