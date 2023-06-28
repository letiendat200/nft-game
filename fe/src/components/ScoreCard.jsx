import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ScoreCard = () => {
  const { userCurrScore, compCurrScore } = useSelector((state) => state?.game);

  return (
    <Container className="border border-white py-2 px-4 rounded-3">
      <Row>
        <Col sm={9} xs={7}>
          <h1 className="fs-2 text-white fw-bold">ROCK</h1>
          <h1 className="fs-2 text-white fw-bold">PAPER</h1>
          <h1 className="fs-2 text-white fw-bold">SCISSORS</h1>
        </Col>
        <Col sm={3} xs={5}>
          <div className="h-100 d-flex flex-column justify-content-center align-items-center py-2 px-4 bg-light text-dark rounded-3">
            <p className="fs-5 text-muted">Score</p>
            <h1 className="fw-bold fs-1 text-dark">
              {userCurrScore}-{compCurrScore}
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
