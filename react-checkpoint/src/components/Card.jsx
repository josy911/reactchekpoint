import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// const props = {
//     cardDetails: {
//         image: "",
//         title: "",
//         text: ""
//     }
// }

// const cardDetails = {
//     image:
//       "https://www.pexels.com/photo/low-angle-shot-of-man-using-virtual-reality-headphones-8059123/",
//     Title: "Willians Sunday",
//     Text: "Lorem ipsum dolor it consequuntur facilis.",
//   }
function OneCard({ cardDetails }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={cardDetails.image}
        style={{ height: "15rem", objectFit: "cover" }}
      />
      <Card.Body className="color red">
        <Card.Title>{cardDetails.title}</Card.Title>
        <Card.Text>{cardDetails.text}</Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default OneCard;
