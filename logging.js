 const ethers = require("ethers");
 const  abi = require("../abis/abi.json");
 require("dotenv").congif();
 
 async function main()
 {
    const prjAddress= "0xC34A11cF9399c5eAC1448f519578427ac0b55C3E";
    const provider = new ethers.providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/gMFM21aT5iacac8b7DTQcyq_E3IRFexO{process.env.ALCHEMY_WEBSOCKET}');
 const contract = new ethers.Contract(prjAddress,abi,provider);
 contract.on("Transfer",(from, to, value, event)=>{
    let info ={
        from: from,
        to: to,
        value:ethers.utils.formatUnits(value,6),
        data: event,
    };
    console.log(JSON.stringify(info,null,4));

 });
}
main();
