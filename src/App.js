import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Character from './components/character/Character';
import { Provider } from 'react-redux';
import Store from './state_management/redux/store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Character />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
