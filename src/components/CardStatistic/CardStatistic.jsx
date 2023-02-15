import "./CardStatistic.css";
import { Card } from "../CardWrapper/Card";

export const CardStatistic = (props) => {
  return (
    <Card className={props.className}>
      <div className="card-title">{props.title}</div>
      <div className="card-wrapper__body">
        <table className="card-wrapper__table">
          <tr>
            <td>2020 год</td>
            <td>2019 год</td>
            <td>2018 год</td>
          </tr>
          <tr>
            <td>123 000 000</td>
            <td>90 568 666</td>
            <td>200 568 666</td>
          </tr>
          <tr>
            <td>123 587 569</td>
            <td>123 587 569</td>
            <td>123 587 569</td>
          </tr>
          <tr>
            <td>258 654 588</td>
            <td>258 654 588</td>
            <td>258 654 588</td>
          </tr>
        </table>
        <div className="range-img">
          <img src={props.img}></img>
        </div>
      </div>
    </Card>
  );
};
