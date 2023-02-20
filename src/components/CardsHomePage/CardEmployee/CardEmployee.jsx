import "./CardEmployee.css"
import { Card } from "../../CardWrapper/Card";

export const CardEmployee = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-title">{props.title}</div>
      <div className="card-container__info">
        <div className="card-information">
          <div className="card-subtitle">{props.firstemployee}</div>
          <div className="card-description">{props.firstposition}</div>
        </div>
        <div >
          <img src={props.icon1} alt="none"
          className="card-info__icon" />

          <img src={props.icon2} alt="none" />
        </div>
      </div>
      <div className="card-container__info">
        <div className="card-information">
          <div className="card-subtitle">{props.secondemployee}</div>
          <div className="card-description">{props.secondposition}</div>
        </div>
        <div >
          <img src={props.icon1} alt="none"
          className="card-info__icon" />

          <img src={props.icon2} alt="none" />
        </div>
      </div>
      <div className="link">{props.showmore}</div>
      
    </Card>
  );
};