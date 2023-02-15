import "./CardStatisticHarvest.css";
import { Card } from "../CardWrapper/Card";

export const CardStatisticHarvest = (props) => {
  return (
    <Card className={props.className}>
      <div className="header-card">
        <div className="card-title">{props.title}</div>
        <div>
          <span className="link">{props.sortyear}</span>
          <img src={props.icon}></img>
        </div>
      </div>
      <div className="body-card">
        <div className="body-card__description">
          <div>
            <div className="body-card__block">
              <img src={props.icon1}></img>
              <div className="body-card__block_text">{props.harvest2020}</div>
            </div>
            <div className="body-card__block_quantity">{props.quantity}</div>
            <div className="body-card__block_quantity">{props.areas}</div>
          </div>
          <div>
            <div className="body-card__block">
              <img src={props.icon2}></img>
              <div className="body-card__block_text">{props.harvest2019}</div>
            </div>
            <div className="body-card__block_quantity">{props.quantity1}</div>
            <div className="body-card__block_quantity">{props.areas1}</div>
          </div>
        </div>
        <div>
          <img src={props.img}></img>
        </div>
      </div>
    </Card>
  );
};
