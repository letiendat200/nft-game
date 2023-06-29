import React, {useEffect} from "react";
import { Rock, Scissors, Paper } from "./export";
import { Row, Container, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../Store/game";
import gameService from '../services/game';

export const ResultArea = () => {
  const dispatch = useDispatch(gameActions);
  const {
    userCurrMove,
    compCurrMove,
    matchStatus,
    round,
    userCurrScore,
    compCurrScore,
  } = useSelector((state) => state?.game);

  const {ethereum} = window;

  const rewardSystem = async (uscore,cscore) => {
    try {
      
      if(round ===5 && uscore>cscore)
      {
        document.getElementById("playAgainButton").disabled = true;
        setTimeout(function(){document.getElementById("playAgainButton").disabled = false;},5000);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log(accounts[0]);
        const reward = await gameService.sendReward(uscore,cscore,accounts[0]);      
        if (reward) {
          console.log(reward)
        }
      }            
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    rewardSystem(userCurrScore, compCurrScore);
  }, []);

  

  const signsArr = [
    <Rock clickable={false} />,
    <Paper clickable={false} />,
    <Scissors clickable={false} />,
  ];

  if (round === 5) dispatch(gameActions.setWinner());

  return (
    <Container className="my-2 py-2 px-4">
      <Row className="d-flex justify-content-center align-items-center flex-col">
        <Col
          xs={10}
          sm={3}
          className="d-flex flex-column justify-content-center align-items-center my-2"
        >
          <h1 className="heading fs-4">You Picked</h1>
          {signsArr[userCurrMove]}
        </Col>
        <Col
          xs={10}
          sm={3}
          className="d-flex flex-column justify-content-center align-items-center my-2"
        >
          {round !== 5 && (
            <h4 className="heading fs-6 text-light">Round {round}</h4>
          )}
          <p className="w-100 heading fs-5 fw-medium">{matchStatus}</p>
          {round === 5 && (
            <p className="heading fs-3 fw-medium">
              {userCurrScore}-{compCurrScore}
            </p>
          )}
          {round !== 5 && (
            <button
              className="bg-white border-0 text-dark rounded-3 px-3 py-2 fs-6 fw-medium"
              onClick={() => {
                dispatch(gameActions.updateStatus());
              }}
            >
              Next Round
            </button>
          )}
          {round === 5 && (
            <button
              className="bg-white border-0 text-dark rounded-3 px-3 py-2 fs-6 fw-medium"
              id="playAgainButton"
              onClick={() => dispatch(gameActions.resetGame())}
            >
              Play Again
            </button>
          )}
          <button
            className="bg-white border-0 text-dark rounded-3 px-3 py-2 fs-6 fw-medium my-2"
            onClick={() => {
              dispatch(gameActions.resetGame());
            }}
          >
            Reset Game
          </button>
        </Col>
        <Col
          xs={10}
          sm={3}
          className="d-flex flex-column justify-content-center align-items-center my-2"
        >
          <h1 className="heading fs-4">Comp Picked</h1>
          {signsArr[compCurrMove]}
        </Col>
      </Row>
    </Container>
  );
};
