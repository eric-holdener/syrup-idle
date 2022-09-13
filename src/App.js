import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Character from './components/character/Character';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Character />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
