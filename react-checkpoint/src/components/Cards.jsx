import React from "react";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";
const cardData = [
  {
    image:
      "https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 1,
    title: "Adventure",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    image:
      "https://images.pexels.com/photos/10536994/pexels-photo-10536994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 2,
    title: "Friendship",
    text: "Lorem ipsum dolor it consequuntur facilis.",
  },
  {
    image:
      "https://images.pexels.com/photos/2026764/pexels-photo-2026764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 3,
    title: "Happiness",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export default function Cards() {
  return (
    <Container className="pt-4">
      <h1>Lean on Me</h1>
      <Row>
        {cardData.map((cardDatum, index) => (
          <Col>
            <Card cardDetails={cardDatum} key={cardDatum.id + index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
