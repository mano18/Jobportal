require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: './.env'});
 //type { HardhatUserConfig } from "hardhat/types";

// address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
//private key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
//@type import('hardhat/config').HardhatUserConfig 

//const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
//const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY
const { MUMBAI_API_URL,  PRIVATE_KEY } = process.env;
const PUBLIC_KEY="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

module.exports = {
  solidity: "0.8.0",
  defaultnetwork: "mumbai",
  networks: {
   mumbai: {
      //url: ALCHEMY_API_KEY_URL,
      url:"https://rpc-mumbai.maticvigil.com/",
      accounts: ['0x${0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80}']
    },
  },
};


