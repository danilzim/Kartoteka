import "./MenuItem.css";

export const MenuItem = (props) => {
  const { title, icon } = props;
  return (
    <div className="menu-item">
      <div>
        <img className="menu-item__icon" src={icon} alt="image" />
      </div>
      <div className="menu-item__title">{title}</div>
    </div>
  );
};
