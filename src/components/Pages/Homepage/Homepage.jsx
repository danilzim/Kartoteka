import { CardsContainer } from "../../CardsContainer/CardsContainer";
import { Header } from "../../Header/Header";
import "./Homepage.css";


export const Homepage = () => {
  return (
    <div className="container">
      <Header/>
      <CardsContainer/>
    </div>
  );
};
