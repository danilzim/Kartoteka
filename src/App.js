import "./App.css";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Header } from "./components/Header/Header";
import { NavMenu } from "./components/Menu/NavMenu";


function App() {
  return (
    <div className="app-wrapper">
      <NavMenu />
      <div className="container">
        <Header />
        <CardsContainer />
      </div>
    </div>
  );
}

export default App;
