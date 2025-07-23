require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337 // define o Chain ID da rede local
    },
     HardhatLocal: {
    url: "http://127.0.0.1:8545", // mesmo RPC do Hardhat Node
    chainId: 31337
  }

  }

};
