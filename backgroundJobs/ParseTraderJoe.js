const Addresses = require('./Addresses.js');
const Compound = require('./CompoundParser');
const Web3 = require('web3');
require('dotenv').config();

class TraderJoeParser extends Compound {
  constructor() {
    const compoundInfo = Addresses.traderJoeAddress;
    const network = 'AVAX';
    const web3 = new Web3(process.env.AVAX_NODE_URL);
    super(compoundInfo, network, web3, 24 * 5);
  }
}

module.exports = { Parser: TraderJoeParser };
