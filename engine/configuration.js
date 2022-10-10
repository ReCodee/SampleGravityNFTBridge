/*  
███╗░░██╗███████╗████████╗██████╗░██████╗░███████╗██╗░░░██╗
████╗░██║██╔════╝╚══██╔══╝╚════██╗██╔══██╗██╔════╝██║░░░██║
██╔██╗██║█████╗░░░░░██║░░░░░███╔═╝██║░░██║█████╗░░╚██╗░██╔╝
██║╚████║██╔══╝░░░░░██║░░░██╔══╝░░██║░░██║██╔══╝░░░╚████╔╝░
██║░╚███║███████╗░░░██║░░░███████╗██████╔╝███████╗░░╚██╔╝░░
╚═╝░░╚══╝╚══════╝░░░╚═╝░░░╚══════╝╚═════╝░╚══════╝░░░╚═╝░░░
                                                              
Update values accordingly
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "2109a319f4fc679ea02f80a55d6189138720fecadcf973076424e1e7a90fc73b";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0xC4cE6a8F6571d59441a078D2Ba5A09688e8D719B";

/*
Global Configurations
*/

/*
Polygon Mumbai Testnet
*/
export var mumErc20 = "0x086cE6290e2F2Ec37E88479e5835eA531E0992cF";
export var mumCustody = "0xd08Ce78b71DcDD1D935dA861136bC6248e4A024C";
export var mumNFT = "0x44007F64fb73ad3b3937bbf2b06Dc7d91707Fe97";
export var mumrpc = "https://matic-testnet-archive-rpc.bwarelabs.com";

/*
Ethereum Goerli Testnet
*/
export var goeErc20 = "0xBB848f3134Ed4Dc82B19717C7F00ed3C706Cb109";
export var goeCustody = "0x2546bAA4383851713F21C59a04B938B4e8Ff515d";
export var goeNFT = "0xf179C1B98E316A26c15ddC16B62ea3e5880b57Aa";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctErc20 = "0x675FB7D7B63068FA5C8454Fd3562c27fb32B9c06";
export var bsctCustody = "0xbBeB6E88b890b1498B854373AdBf687Ff3Ed2838";
export var bsctNFT = "0xc24703c37988A96Eb189571B5ce247f120B00971";
export var bsctrpc = "https://data-seed-prebsc-1-s1.binance.org:8545/";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

/*
BSC Mainnet
*/

export var bscrpc = "https://bsc-dataseed.binance.org";