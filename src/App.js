import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Character from './components/Character/Character';
import { Provider } from 'react-redux';
import Store from "./state_management/Redux/store";
import CombatMain from './components/Combat/CombatMain';
import AlchemyMain from './components/Skills/CraftingSkills/Alchemy/AlchemyMain';
import Inventory from './components/Character/Inventory';
import LoginSplash from './components/Login/LoginSplash';
import AuthChecker from './components/Layout/Route_Protection/AuthChecker'
import HerbsMain from './components/Skills/CollectionSkills/Herbs/HerbsMain'
import Fishing from './components/Skills/CollectionSkills/Fishing/FishingMain';
import Mining from './components/Skills/CollectionSkills/Mining/MiningMain';
import Farming from './components/Skills/CollectionSkills/Farming/FarmingMain';
import Thieving from './components/Skills/CollectionSkills/Thieving/ThievingMain';
import Herbalism from './components/Skills/RefiningSkills/HerbRefining/HerbalismMain';
import Cooking from './components/Skills/RefiningSkills/Cooking/CookingMain';
import Smithing from './components/Skills/RefiningSkills/Smithing/SmithingMain';
import Forging from './components/Skills/CraftingSkills/Equipment/ForgingMain';
import Crafting from './components/Skills/CraftingSkills/Jewelry/JewelryMain';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AuthChecker><Character /></AuthChecker>} />
              <Route path="combat" element={<AuthChecker><CombatMain /></AuthChecker>} />
              <Route path="gathering" element={<AuthChecker><HerbsMain /></AuthChecker>} />
              <Route path="inventory" element={<AuthChecker><Inventory /></AuthChecker>} />
              <Route path="fishing" element={<AuthChecker><Fishing /></AuthChecker>} />
              <Route path="mining" element={<AuthChecker><Mining /></AuthChecker>} />
              <Route path="farming" element={<AuthChecker><Farming /></AuthChecker>} />
              <Route path="thieving" element={<AuthChecker><Thieving /></AuthChecker>} />
              <Route path="herbalism" element={<AuthChecker><Herbalism /></AuthChecker>} />
              <Route path="cooking" element={<AuthChecker><Cooking /></AuthChecker>} />
              <Route path="smithing" element={<AuthChecker><Smithing /></AuthChecker>} />
              <Route path="alchemy" element={<AuthChecker><AlchemyMain /></AuthChecker>} />
              <Route path="forging" element={<AuthChecker><Forging /></AuthChecker>} />
              <Route path="crafting" element={<AuthChecker><Crafting /></AuthChecker>} />

              <Route path="character-select" element={<LoginSplash />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App;
