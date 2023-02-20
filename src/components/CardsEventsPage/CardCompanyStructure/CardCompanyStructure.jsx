import "./CardCompanyStructure.css";
import { Card } from "../../CardWrapper/Card";

export const CardCompanyStructure = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-company__header">
        <div className="card-title">{props.title}</div>
      </div>

      <div className="card-company__firstblock">
        <div className="card-company__subblock">
          <div className="block-title">
            <div className="card-title">{props.company}</div>
            <img src={props.arrow}></img>
          </div>
          <div className="card-subtitle__status">{props.liquidation}</div>
        </div>
        <div className="card-company__subblock">
          <div className="card-subtitle">{props.director}</div>
          <div className="card-subtitle__contract">{props.contract}</div>
        </div>
        <div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_location}></img>
            <div className="card-subtitle">{props.address}</div>
          </div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_face}></img>
            <div className="card-subtitle">{props.employee}</div>
          </div>
        </div>
      </div>
      <div className="card-company__secondblock">
        <div className="card-company__subblock">
          <div className="block-title">
            <div className="card-title">{props.company}</div>
            <img src={props.arrow}></img>
          </div>
          <div className="card-subtitle__status">{props.reorganization}</div>
        </div>
        <div className="card-company__subblock">
          <div className="card-subtitle">{props.director}</div>
          <div className="card-subtitle__contract">{props.contract}</div>
        </div>
        <div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_location}></img>
            <div className="card-subtitle">{props.address}</div>
          </div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_face}></img>
            <div className="card-subtitle">{props.employee}</div>
          </div>
        </div>
        <div>
          <div className="card-title">{props.rename}</div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_sign}></img>
            <div className="card-description">{props.first_rename}</div>
          </div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_sign}></img>
            <div className="card-description">{props.second_rename}</div>
          </div>
        </div>
      </div>
      <div className="card-company__footer">
        <div className="card-company__subblock">
          <div className="block-title">
            <div className="card-title">{props.company}</div>
            <img src={props.arrow}></img>
          </div>
          <div className="card-subtitle__status">{props.bankruptcy}</div>
        </div>
        <div className="card-company__subblock">
          <div className="card-subtitle">{props.director}</div>
          <div className="card-subtitle__contract">{props.contract}</div>
        </div>
        <div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_location}></img>
            <div className="card-subtitle">{props.address}</div>
          </div>
          <div className="block-icon">
            <img className="icon-signature" src={props.icon_face}></img>
            <div className="card-subtitle">{props.employee}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
