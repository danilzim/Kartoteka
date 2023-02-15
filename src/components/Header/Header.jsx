import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container__title">ИП Васильев</div>

        <div className="header-container__blockicon">
          <div className="header-container__icon">
            <img src="icons/plus.svg"></img>
          </div>

          <div className="header-container__icon">
            <img src="icons/settings.svg"></img>
          </div>
        </div>
      </div>
    </header>
  );
};
