import "./FieldCard.css";

import { Card } from "../CardWrapper/Card";

export const FieldCard = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-title">{props.title}</div>
      <div className="fieldcard-img">
        <img src={props.img}></img>
      </div>
    </Card>
  );
};
