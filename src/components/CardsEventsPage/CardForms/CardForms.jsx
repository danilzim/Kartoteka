import { Card } from "../../CardWrapper/Card";
import "./CardForms.css";

export const CardForms = (props) => {
  return (
    <Card className={props.className}>
      <div className="forms-line">
        <div className="line-cheks">
          <div className="card-title">{props.certificate}</div>
          <div className="line"></div>
        </div>
        <button className="button-text">Сформировать</button>
      </div>
      <div className="forms-line">
        <div className="line-cheks">
          <div className="card-title">{props.act}</div>
          <div className="line"></div>
        </div>
        <button className="button-text">Сформировать</button>
      </div>
      <div className="forms-line">
        <div className="line-cheks">
          <div className="card-title">{props.scheme}</div>
          <div className="line"></div>
        </div>
        <button className="button-text">Сформировать</button>
      </div>
    </Card>
  );
};
