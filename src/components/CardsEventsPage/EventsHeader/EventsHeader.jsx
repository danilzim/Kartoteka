import "./EventsHeader.css";

export const EventsHeader = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container__blocktext">
          <div className="header-container__title">{props.title}</div>
          <div className="header-container__subtitle">{props.status}</div>
        </div>

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
