import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import InventoryItem from './components/InventoryItem';
import Batchform from './components/BatchForm';
import OrderForm from './components/OrderForm';

function App() {

  const [inventory, setInventory] = useState([])

  const fetchInventory = () => {
    fetch("http://localhost:5001/inventory").then(
      res => res.json()
    ).then(
      data => {
        setInventory(data)
        console.log(data)
      }
    )
  }

  useEffect(() => {
    fetchInventory()
  }, [])


  return (
    <div>
      <Navbar />
      <h2>Inventory</h2>

      {inventory.map(item => (
        <InventoryItem key={item.id} item={item} />
      ))}

      <Batchform inventory={inventory} onBatchLogged={fetchInventory}/>
      <OrderForm inventory={inventory} onOrderLogged={fetchInventory}/>
    </div>
  );

}

export default App;