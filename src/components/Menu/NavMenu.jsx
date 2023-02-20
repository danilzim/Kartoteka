import { MenuItem } from "./MenuItem/MenuItem";
import { Link } from 'react-router-dom';
import "./NavMenu.css";


export const NavMenu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <MenuItem to={"/"} title={"Главная"} icon={"icons/home.svg"} />
        <MenuItem
          title={"Константин Константиновский"}
          icon={"icons/man.svg"}
        />
      </div>
      <div className="menu-body">
        <MenuItem to={"/events"} title={"Мероприятия"} icon={"icons/date.svg"} />
        <MenuItem title={"Сотрудники"} icon={"icons/people.svg"} />
        <MenuItem title={"Заметки"} icon={"icons/pergament.svg"} />
        <MenuItem title={"Статистика"} icon={"icons/diagrama.svg"} />
        <MenuItem title={"Удобрения"} icon={"icons/galochka.svg"} />
        <MenuItem title={"Погода"} icon={"icons/weather.svg"} />
        <MenuItem to={"/organization"} title={"Организации"} icon={"icons/rupor.svg"} />
      </div>
    </div>
  );
};
