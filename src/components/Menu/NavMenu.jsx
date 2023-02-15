import { MenuItem } from "./MenuItem/MenuItem";
import "./NavMenu.css";

export const NavMenu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <MenuItem title={"Главная"} icon={"icons/home.svg"} />
        <MenuItem
          title={"Константин Константиновский"}
          icon={"icons/man.svg"}
        />
      </div>
      <div className="menu-body">
        <MenuItem title={"Мероприятия"} icon={"icons/date.svg"} />
        <MenuItem title={"Сотрудники"} icon={"icons/people.svg"} />
        <MenuItem title={"Заметки"} icon={"icons/pergament.svg"} />
        <MenuItem title={"Статистика"} icon={"icons/diagrama.svg"} />
        <MenuItem title={"Удобрения"} icon={"icons/galochka.svg"} />
        <MenuItem title={"Погода"} icon={"icons/weather.svg"} />
        <MenuItem title={"Организации"} icon={"icons/rupor.svg"} />
      </div>
    </div>
  );
};
