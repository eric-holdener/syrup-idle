import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Character from './components/Character/Character';
import { Provider } from 'react-redux';
import Store from "./state_management/Redux/store";
import CombatMain from './components/Combat/CombatMain';
import BrewingMain from './components/Brewing/BrewingMain';
import Inventory from './components/Character/Inventory';
import LoginSplash from './components/Login/LoginSplash';
import AuthChecker from './components/Route_Protection/AuthChecker';
import HerbsMain from './components/Herbs/HerbsMain';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AuthChecker><Character /></AuthChecker>} />
              <Route path="combat" element={<AuthChecker><CombatMain /></AuthChecker>} />
              <Route path="brewing" element={<AuthChecker><BrewingMain /></AuthChecker>} />
              <Route path="herbs" element={<AuthChecker><HerbsMain /></AuthChecker>} />
              <Route path="inventory" element={<AuthChecker><Inventory /></AuthChecker>} />
              <Route path="character-select" element={<LoginSplash />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App;
