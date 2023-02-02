import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Header } from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import { MenuSection } from './component/MenuSection/MenuSection';

function App() {
  return (
    <>
    
      <Header></Header>
      <Hero></Hero>
      <MenuSection></MenuSection>
    
    </>
  );
}

export default App;
