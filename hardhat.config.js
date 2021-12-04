require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privatekey = fs.readFileSync('.secret').toString().trim() || "01234567890123456789"


const projectId = "c4c70489d0d84fd69aa912432b7502cd"

 module.exports = {
  networks: {
   hardhat: {
     chainId: 1337
	},
	mumbai: {
	 url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
	  accounts: [privatekey]
	},
	mainnet: {
	 url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
	 accounts: [privatekey]
	}
	},

	solidity: "0.8.1",
};
