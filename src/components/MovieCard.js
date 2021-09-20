import { Card, CardImage, CardTitle } from "../styled/Card";

export default function MovieCard(props) {
  return (
    <Card>
      <CardImage src={props.image} />
      <CardTitle>{props.children}</CardTitle>
    </Card>
  );
}
