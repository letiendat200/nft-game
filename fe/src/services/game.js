import axios from 'axios';

const sendReward = async (userScore,compScore) => {
  const result = await axios.post(
    `http://localhost:4000/api/game/reward`, 
    { userScore, compScore },
  );
  return result.data;
};



const gameService = {
    sendReward,
};

export default gameService;
