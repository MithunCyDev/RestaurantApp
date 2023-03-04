import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { StateProvider } from './Context/StateProvider';
import { InitialState } from './Context/InitialState';
import reducer from './Context/Reducer';
import { Spiner } from './Spiner/Spiner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <StateProvider initialState={InitialState} reducer = {reducer}>
      <AnimatePresence>
        <Spiner/>
    </AnimatePresence>
    </StateProvider>
  </Router>
  
);


