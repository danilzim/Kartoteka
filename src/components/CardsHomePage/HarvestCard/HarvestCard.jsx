import "./HarvestCard.css";
import { Card } from "../../CardWrapper/Card";

export const HarvestCard = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-title">{props.title}</div>
      <div className="card-subtitle">{props.subtitle}</div>
      <div className="fieldcard-img">
        <img src={props.img}></img>
      </div>
    </Card>
  );
};
