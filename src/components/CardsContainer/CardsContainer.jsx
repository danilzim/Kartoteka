import "./CardsContainer.css";
import { employeeCardMock, fieldCardMock, harvestCardMock, rentCardMock, statisticCardMock, statisticHarvestCardMock, weatherCardMock } from "../../mocks/fieldcard-mocks";
import { HarvestCard } from "../HarvestCard/HarvestCard";
import { FieldCard } from "../FieldCard/FieldCard";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { CardStatistic } from "../CardStatistic/CardStatistic";
import { CardEmployee } from "../CardEmployee/CardEmployee";
import { CardStatisticHarvest } from "../CardStatisticHarvest/CardStatisticHarvest";
import { CardRent } from "../CardRent/CardRent";

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
