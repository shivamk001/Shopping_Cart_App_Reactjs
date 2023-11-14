import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { itemContext } from './contexts/itemContext';
import {totalContext} from './contexts/totalContext'

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  console.log(total, item)
  return (
      <itemContext.Provider value={{item, setItem}}>        
        <totalContext.Provider value={{total, setTotal}}>
          <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
          </div>
        </totalContext.Provider>
      </itemContext.Provider>

  );
}
export default App;
