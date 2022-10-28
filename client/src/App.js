import React from 'react';
import Fivek from './components/Fivek';
import Mile from './components/Mile';

import {
  BrowserRouter, 
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Fivek></Fivek>}></Route> 
          <Route exact path="/mile" element={<Mile></Mile>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
