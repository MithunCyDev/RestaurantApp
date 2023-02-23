import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateItems } from './component/CreateItems/CreateItems';
import { Header } from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import { Order } from './component/Order/Order';

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/home' element={<Hero/>}/>
          <Route path='/createitems' element={<CreateItems/>}/>
          <Route path='/order' element={<Order></Order>}/>
        </Routes>
    </>
  );
}

export default App;
