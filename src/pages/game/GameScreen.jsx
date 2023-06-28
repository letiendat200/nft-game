import "./GameScreen.css";
import "../bootstrap/dist/css/bootstrap.min.css";
import { ScoreCard, PlayingArea, ResultArea } from "../../components/export";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function GameScreen() {
  
  const { status } = useSelector((state) => state?.game);
  return (
    <div className="mw-100 min-vh-100 bg-dark py-4 overflow-hidden">
      <Col sm={12}>
        <Row className="d-flex justify-content-center my-2">
          <Col md={6} xs={12}>
            <ScoreCard />
          </Col>
        </Row>
        {status === 1 && (
          <>
            <Row className="d-flex justify-content-center my-2">
              <Col md={6} xs={12}>
                <h1 className="text-white fs-5 text-center">
                  Click on any sign to play the game
                </h1>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center my-2">
              <Col md={6} xs={12}>
                <PlayingArea />
              </Col>
            </Row>
          </>
        )}
        {status === 2 && (
          <Row className="d-flex justify-content-center my-2">
            <Col md={9} xs={12}>
              <ResultArea />
            </Col>
          </Row>
        )}
        <Row className="d-flex justify-content-center my-2">
          <Col md={12} xs={12}>
            <h1 className="w-100 heading fs-6 text-center">
              
            </h1>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default GameScreen;