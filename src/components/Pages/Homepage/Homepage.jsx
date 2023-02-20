import { headerHomeMock } from "../../../mocks/home-page";
import { CardsContainer } from "../../CardsContainer/CardsContainer";
import { Header } from "../../CardsHomePage/Header/Header";
import "./Homepage.css";


export const Homepage = () => {
  return (
    <div className="container">
      <Header {...headerHomeMock}/>
      <CardsContainer/>
    </div>
  );
};
