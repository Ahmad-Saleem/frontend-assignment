import { Card, CardImage, CardTitle, FloatPill } from "../styled/Card";

export default function MovieCard(props) {
  return (
    <Card>
      <CardImage src={props.image} />
      <CardTitle>{props.children}</CardTitle>
      <FloatPill>
        <span>{props.rating}</span>
      </FloatPill>
    </Card>
  );
}
