import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Web3 from 'web3';
function AuctionScreen() {
    
    const cards = [
        {image: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/139446.shadow.png"}];
    const {ethereum} = window;
    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          window.ethereum.enable();
        }
      }
      async function loadContract() {
        let abi = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Bid",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "highestBidder",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "highestBid",
                        "type": "uint256"
                    }
                ],
                "name": "End",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Start",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "bidder",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Withdraw",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "bid",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "bids",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "end",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "endAt",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ended",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "highestBid",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "highestBidder",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "nft",
                "outputs": [
                    {
                        "internalType": "contract IERC721",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "nftId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "seller",
                "outputs": [
                    {
                        "internalType": "address payable",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "contract IERC721",
                        "name": "_nft",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_nftId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startingBid",
                        "type": "uint256"
                    }
                ],
                "name": "start",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "started",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }
        ] // abi here
        let address = "0xD2459255D0A4AE558D961d989c62156F36904932"  // contract address here
        return await new window.web3.eth.Contract(abi, address);
      }
      async function getCurrentAccount() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
      }
    const placeBid = async() =>{    
        await loadWeb3();
        const bid = document.getElementById("bid-amount").value;
        console.log(bid);
        window.contract = await loadContract();
        const account = await getCurrentAccount();        
        let result = await window.contract.methods.bid().send({ 
          from: account,
          gasPrice: window.web3.utils.toWei("10","gwei"),
          gas: 200000,
          value: window.web3.utils.toWei(bid.toString(),"gwei")
        });
        
    }
    return (
        <>
        <br></br><br></br><br></br>
    <Grid container spacing={4}>
        {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image= {card.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    This DatNFT is on auction
                    BID NOW!!
                  </Typography>                  
                </CardContent>
                <CardActions>
                  <TextField label="Place your bid now" size="big" id='bid-amount'></TextField>
                  <Button onClick={placeBid}style={{ fontSize: '20px' }}>BID</Button>
                </CardActions>
              </Card>
            </Grid>
            ))
    }
    </Grid>
    </>
)};
export default AuctionScreen;