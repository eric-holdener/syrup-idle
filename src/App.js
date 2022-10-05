import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Character from './components/Character/Character';
import { Provider } from 'react-redux';
import Store from './state_management/Redux/store';
import CombatMain from './components/Combat/CombatMain';
import BrewingMain from './components/Brewing/BrewingMain';
import Inventory from './components/Character/Inventory';
import EquipmentTab from './components/Character/inventory/EquipmentTab';
import UseTab from './components/Character/inventory/UseTab';
import EtcTab from './components/Character/inventory/EtcTab';

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Character />} />
                <Route path="combat" element={<CombatMain />} />
                <Route path="brewing" element={<BrewingMain />} />
                <Route path="inventory" element={<Inventory />}>
                  <Route path="equip" element={<EquipmentTab />} />
                  <Route path="use" element={<UseTab />} />
                  <Route path="etc" element={<EtcTab />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
