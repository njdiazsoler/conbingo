import { Card } from "react-bootstrap";

const BingoCard = (props) => {
  const { items } = props;
  return (
    <div
      className="align-content-center container d-flex flex-row flex-wrap justify-content-center"
      style={{
        height: "80vh",
      }}
    >
      {items.map((item, index) => {
        return (
          <Card
            className="border-dark custom-card m-1 text-body"
            key={index}
            role="bingo-card"
          >
            <Card.Body style={{ padding: ".5rem" }}>
              {item}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default BingoCard;
