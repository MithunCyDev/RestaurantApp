import { doc } from 'firebase/firestore';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateItems } from './component/CreateItems/CreateItems';
import { Header } from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import { Order } from './component/Order/Order';
import { actionType } from './Context/Reducer';
import { useStateValue } from './Context/StateProvider';
import { getAllFoodItems } from './Utils/FirebaseFunction';

function App() {

  const [{foodItems}, dispatch] = useStateValue();
  //fetch data from firebase database
  const fetchData = async ()=>{
    await getAllFoodItems().then((data)=>{
      console.log(data)
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(()=>{
    fetchData()
  },[])
  
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
