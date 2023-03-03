import { doc } from 'firebase/firestore';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreateItems } from './component/CreateItems/CreateItems';
import { Header } from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import { Order } from './component/Order/Order';
import { actionType } from './Context/Reducer';
import { useStateValue } from './Context/StateProvider';
import { getAllFoodItems } from './Utils/FirebaseFunction';
import { NotFound } from './component/NotFound/NotFound';
import { About } from './component/About/About';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { Contact } from './component/Contact/Contact';

function App() {

  const [{foodItems, user}, dispatch] = useStateValue();
  //fetch data from firebase database
  const fetchData = async ()=>{
    await getAllFoodItems().then((data)=>{
      
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
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/createitems' element={
          <ProtectedRoute user={user} >
            <CreateItems/>
          </ProtectedRoute>}
          />
          <Route path='/order' element={<Order></Order>}/>
          <Route path='/notFound' element={<NotFound/>}/>
          <Route path='/*' element={<NotFound/>}/>
          
        </Routes>
    </>
  );
}

export default App;
