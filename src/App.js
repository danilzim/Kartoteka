import { Routes, Route, Link } from 'react-router-dom';
import "./App.css";

import { NavMenu } from "./components/Menu/NavMenu";
import { Homepage } from './components/Pages/Homepage/Homepage';
import { Events } from './components/Pages/Events/Events';
import { Organization } from './components/Pages/Organization/Organization';


function App() {
  return (
    <div className="app-wrapper">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/organization" element={<Organization/>}/>
      </Routes>
    </div>
  );
}

export default App;
