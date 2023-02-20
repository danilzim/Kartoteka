import { Link } from 'react-router-dom';
import "./MenuItem.css";


export const MenuItem = (props) => {
  const { title, icon, to } = props;
  return (
    <Link to={to} className="menu-item">
      <div>
        <img className="menu-item__icon" src={icon} alt="image" />
      </div>
      <div className="menu-item__title">{title}</div>
    </Link>
  );
};
