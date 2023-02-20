import "./WeatherCard.css";
import { Card } from "../../CardWrapper/Card";

export const WeatherCard = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-title">{props.title}</div>
      <div className="card-info">
        <div className="card-info__text">
          <div className="card-subtitle">{props.date}</div>
          <div className="card-subtitle">{props.weekday}</div>
        </div>
        <div className="card-info__temperature">{props.temperature}</div>
      </div>
      <div className="card__footer">
        <div className="card__footer_column1">
        <div className="card-description">{props.pressure}</div>
        <div className="card-description">{props.wind}</div>
        </div>
        <div className="card__footer_column2" >
        <div className="card-description">{props.weather}</div>
        <div className="card-description">{props.precipitation}</div>
        </div>
      </div>
    </Card>
  );
};
