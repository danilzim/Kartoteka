import { Card } from "../../CardWrapper/Card";
import "./CardOrganizationInfo.css";

export const CardOrganizationInfo = (props) => {
  return (
    <Card className={props.className}>
      <table className="card-organization__table">
        <tr className="table-header">
          <td className="card-title"></td>
          <td className="card-title">Наименование организации</td>
          <td className="card-title">ИНН</td>
          <td className="card-title">Руководитель</td>
          <td className="card-title">Адрес</td>
          <td className="card-title"></td>
        </tr>
        <tr>
          <td>
            <img src="icons/range1.svg"></img>
          </td>
          <td className="table-cell">{props.skolkovo}</td>
          <td className="table-cell">{props.inn_skolkovo}</td>
          <td className="table-cell">{props.skolkovo_superviser}</td>
          <td className="table-cell">{props.skolkovo_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range1.svg"></img>
          </td>
          <td className="table-cell">{props.ramn}</td>
          <td className="table-cell">{props.inn_ramn}</td>
          <td className="table-cell">{props.ramn_superviser}</td>
          <td className="table-cell">{props.ramn_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range1.svg"></img>
          </td>
          <td className="table-cell">{props.rio}</td>
          <td className="table-cell">{props.inn_rio}</td>
          <td className="table-cell">{props.rio_superviser}</td>
          <td className="table-cell">{props.rio_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range1.svg"></img>
          </td>
          <td className="table-cell">{props.academ}</td>
          <td className="table-cell">{props.inn_academ}</td>
          <td className="table-cell">{props.academ_superviser}</td>
          <td className="table-cell">{props.academ_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range1.svg"></img>
          </td>
          <td className="table-cell">{props.ran}</td>
          <td className="table-cell">{props.inn_ran}</td>
          <td className="table-cell">{props.ran_superviser}</td>
          <td className="table-cell">{props.ran_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range2.svg"></img>
          </td>
          <td className="table-cell">{props.device}</td>
          <td className="table-cell">{props.inn_device}</td>
          <td className="table-cell">{props.device_superviser}</td>
          <td className="table-cell">{props.device_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range2.svg"></img>
          </td>
          <td className="table-cell">{props.device}</td>
          <td className="table-cell">{props.inn_device}</td>
          <td className="table-cell">{props.device_superviser}</td>
          <td className="table-cell">{props.device_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range2.svg"></img>
          </td>
          <td className="table-cell">{props.device}</td>
          <td className="table-cell">{props.inn_device}</td>
          <td className="table-cell">{props.device_superviser}</td>
          <td className="table-cell">{props.device_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range2.svg"></img>
          </td>
          <td className="table-cell">{props.skolkovo}</td>
          <td className="table-cell">{props.inn_skolkovo}</td>
          <td className="table-cell">{props.skolkovo_superviser}</td>
          <td className="table-cell">{props.skolkovo_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range2.svg"></img>
          </td>
          <td className="table-cell">{props.ramn}</td>
          <td className="table-cell">{props.inn_ramn}</td>
          <td className="table-cell">{props.ramn_superviser}</td>
          <td className="table-cell">{props.ramn_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range3.svg"></img>
          </td>
          <td className="table-cell">{props.rio}</td>
          <td className="table-cell">{props.inn_rio}</td>
          <td className="table-cell">{props.rio_superviser}</td>
          <td className="table-cell">{props.rio_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range3.svg"></img>
          </td>
          <td className="table-cell">{props.ran}</td>
          <td className="table-cell">{props.inn_ran}</td>
          <td className="table-cell">{props.ran_superviser}</td>
          <td className="table-cell">{props.ran_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range3.svg"></img>
          </td>
          <td className="table-cell">{props.academ}</td>
          <td className="table-cell">{props.inn_academ}</td>
          <td className="table-cell">{props.academ_superviser}</td>
          <td className="table-cell">{props.academ_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
        <tr>
          <td>
            <img src="icons/range3.svg"></img>
          </td>
          <td className="table-cell">{props.device}</td>
          <td className="table-cell">{props.inn_device}</td>
          <td className="table-cell">{props.device_superviser}</td>
          <td className="table-cell">{props.device_address}</td>
          <td>
            <img src="icons/pen.svg"></img>
          </td>
        </tr>
      </table>
    </Card>
  );
};
