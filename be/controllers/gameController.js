const PRIVATE_KEY = '0x3c67c6c286d441c4fbcde9ceea2cd9de2c74d9b648d4a4736c344af7000f9873';
const ethNetwork = 'https://data-seed-prebsc-1-s1.bnbchain.org:8545';
const {Web3} = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
const gameController = {
  executeReward: async (req, res) => {
    try {      
        const { userScore, compScore, walletAddress } = req.body;      
        if(userScore > compScore){  
        const myAddress = '0x25d63530f6D7989dA3B99b4a61f2D3460c19e7c9' 
        const nonce = await web3.eth.getTransactionCount(myAddress, 'latest');
        const gasPrice = await web3.eth.getGasPrice();        
        const transaction = {
          'to': walletAddress, 
          'value': web3.utils.toWei('0.001','ether'), 
          'gas': 200000,
          "gasPrice": gasPrice,
          'nonce': nonce,     
         };        
        const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);         
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
          if (!error) {
            console.log("The hash of your transaction is: ", hash, );
            return res.status(201).json({ message: "done" });
          } else {
            console.log(error.message)
            console.log("Error something's wronng", error)
          }
         });             
      }         
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ message: error.message });
    }
  },

  
};

    
module.exports = gameController;
