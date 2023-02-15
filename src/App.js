import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateItems } from './component/CreateItems/CreateItems';
import { Header } from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import { MenuSection } from './component/MenuSection/MenuSection';

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/home' element={<Hero/>}/>
          <Route path='createitems' element={<CreateItems/>}/>
        </Routes>
    </>
  );
}

export default App;
