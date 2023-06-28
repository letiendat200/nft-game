import React from "react";
import { Rock, Paper, Scissors } from "./export";
import { Row, Container, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gameActions } from "../Store/game";

export const PlayingArea = () => {
  const dispatch = useDispatch(gameActions);

  const updateUserMoveHandler = (value) => {
    // update user move
    dispatch(gameActions.updateUserMove(value));
    // make comp move
    updateCompMoveHandler();
  };

  const updateCompMoveHandler = () => {
    // generating random value
    const value = Math.round(Math.random() * 2);
    dispatch(gameActions.updateCompMove(value));

    // decide winner of round
    dispatch(gameActions.decideWinner());

    // change display status
    dispatch(gameActions.updateRound());
    dispatch(gameActions.updateStatus());
  };

  return (
    <Container className="my-2 p-2">
      <Row className="d-flex justify-content-center align-items-center">
        <Col
          sm={6}
          xs={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Rock updateUserMoveHandler={updateUserMoveHandler} />
        </Col>
        <Col
          sm={6}
          xs={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Paper updateUserMoveHandler={updateUserMoveHandler} />
        </Col>
        <Col
          sm={6}
          xs={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Scissors updateUserMoveHandler={updateUserMoveHandler} />
        </Col>
      </Row>
    </Container>
  );
};
