const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions)).toString();
  }
}

module.exports.Block = Block;