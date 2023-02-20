import { headerEventsMock } from "../../../mocks/events-page";
import { CardsContainerEvents } from "../../CardsContainerEvents/CardsContainerEvents";
import { EventsHeader } from "../../CardsEventsPage/EventsHeader/EventsHeader";


export const Events = () => {
  return (
    <div className="container">
      <EventsHeader {...headerEventsMock}/>
      <CardsContainerEvents/>
    </div>
  );
};