const {Block} = require("./api/modules/Block");
const {BLockChain} = require("./api/modules/BlockChain");


let testBlockChain = new BLockChain();

testBlockChain.addBlock(new Block('03/01/2020',{timeIn: '01/02/2020'}));
testBlockChain.addBlock(new Block('07/01/2020',{timeIn: '01/03/2020'}));
