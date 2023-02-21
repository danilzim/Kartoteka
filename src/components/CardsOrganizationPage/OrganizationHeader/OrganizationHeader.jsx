import "./OrganizationHeader.css";

export const OrganizationHeader = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container__blocktext">
          <div className="header-container__title">{props.title}</div>
        </div>
        <form className="header-form">
          <input
            className="header-form__input"
            type="text"
            placeholder="Поиск организации по ИНН или ОГРН"
          ></input>
          <button className="header-form__button">
            <img src="/icons/voronka.svg"></img>
          </button>
        </form>
        <div className="header-container__blockicon">
          <button className="form-button">{props.button}</button>
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
