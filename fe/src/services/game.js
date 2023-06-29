import axios from 'axios';

const sendReward = async (userScore,compScore, walletAddress) => {
  const result = await axios.post(
    `http://localhost:4000/api/game/reward`, 
    { userScore, compScore, walletAddress },
  );
  console.log(result.data);
  return result.data;
};



const gameService = {
    sendReward,
};

export default gameService;
