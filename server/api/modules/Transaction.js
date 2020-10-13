const SHA256 = require('crypto-js/sha256');

class Transaction{
  constructor(eventName, timeIn, timeOut, wfh) {
    this.eventName = eventName;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
    this.wfh = wfh;
  }
}

module.exports.Transaction = Transaction;