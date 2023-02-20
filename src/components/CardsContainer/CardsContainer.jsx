import "./CardsContainer.css";
import { employeeCardMock, fieldCardMock, harvestCardMock, rentCardMock, statisticCardMock, statisticHarvestCardMock, weatherCardMock } from "../../mocks/home-page";
import { HarvestCard } from "../CardsHomePage/HarvestCard/HarvestCard";
import { FieldCard } from "../CardsHomePage/FieldCard/FieldCard";
import { WeatherCard } from "../CardsHomePage/WeatherCard/WeatherCard";
import { CardStatistic } from "../CardsHomePage/CardStatistic/CardStatistic";
import { CardEmployee } from "../CardsHomePage/CardEmployee/CardEmployee";
import { CardStatisticHarvest } from "../CardsHomePage/CardStatisticHarvest/CardStatisticHarvest";
import { CardRent } from "../CardsHomePage/CardRent/CardRent";

export const CardsContainer = () => {
  return (
    <div className="cards-container">
      <FieldCard className="first-card-type" {...fieldCardMock} />
      <HarvestCard className="first-card-type" {...harvestCardMock} />
      <WeatherCard className="first-card-type" {...weatherCardMock}/>
      <CardStatistic className="second-card-type" {...statisticCardMock}/>
      <CardEmployee className="first-card-type" {...employeeCardMock}/>
      <CardStatisticHarvest className="third-card-type" {...statisticHarvestCardMock}/>
      <CardRent className="third-card-type" {...rentCardMock}/>
    </div>
  );
};
