import "./CardRent.css";
import { Card} from "../CardWrapper/Card";

export const CardRent = (props) => {
  return (
    <Card className={props.className}>
      <div className="header-card">
        <div className="card-title">{props.title}</div>
        <div>
          <img src={props.icon}></img>
        </div>
      </div>
      <div className="card-subtitle">{props.company}</div>
      <div className="body-card">
      
        <div>
          <div className="body-card__info">
           
            <div className="body-card__cell">
              <div className="body-card__block">
                <img src={props.icon1}></img>
              </div>
              <div className="body-card__block_text">
                {props.excavators2020}
              </div>
            </div>

            <div className="body-card__block_quantity">{props.quantity}</div>
            <div className="body-card__block_quantity">{props.areas}</div>
            <div className="body-card__block_quantity">{props.enterprises}</div>
          </div>
        </div>
        <div>
          <img className="frame-img" src={props.img}></img>
        </div>
      </div>
      <div className="card__footer">
        <div className="link">{props.link}</div>
      </div>
    </Card>
  );
};
