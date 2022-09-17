import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Character from './components/character/Character';
import { Provider } from 'react-redux';
import Store from './state_management/redux/store';
import CombatMain from './components/combat/CombatMain';
import BrewingMain from './components/brewing/BrewingMain';
import Inventory from './components/character/Inventory';

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Character />} />
                <Route path="/combat" element={<CombatMain />} />
                <Route path="/brewing" element={<BrewingMain />} />
                <Route path="/inventory" element={<Inventory />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
