import "./CardDecisionChecking.css";
import { Card } from "../../CardWrapper/Card";

export const CardDecisionChecking = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-decision__header">
        <div className="card-subtitle">{props.title}</div>
        <input className="header-textarea" placeholder="Введите текст"></input>
      </div>
      <div className="card-decision__body">
        <div className="card-decision__element">
          <div className="card-subtitle">{props.organization}</div>
          <input
            className="card-first-input"
            placeholder="ООО “РесерчХолд”"
          ></input>
        </div>
        <div className="card-decision__element">
          <div className="card-subtitle">{props.type}</div>
          <select className="card-select">
            <option>Плановая</option>
          </select>
        </div>
        <div className="card-decision__element">
          <div className="card-subtitle">{props.form}</div>
          <select className="card-select">
            <option>Выездная</option>
          </select>
        </div>
        <div className="card-decision__element">
          <div className="card-subtitle">{props.method}</div>
          <select className="card-select">
            <option>Фактическая</option>
          </select>
        </div>
        <div className="card-decision__element">
          <div className="card-subtitle">{props.terms}</div>
          <input
            className="card-second-input"
            placeholder="02.08.2020 - 05.08.2020 "
          ></input>
        </div>
        <div className="card-decision__element">
          <div className="card-subtitle">{props.place}</div>
          <input
            className="card-first-input"
            placeholder="г. Москва, Лененский пр-т 178, к4"
          ></input>
        </div>
        <div className="card-decision__footer">
          <button className="button-write">Написать</button>
        </div>
      </div>
    </Card>
  );
};
