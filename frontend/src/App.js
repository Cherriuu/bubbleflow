import React, { useState, useEffect } from 'react'
import BatchForm from './components/BatchForm';

function App() {

  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch("http://localhost:5001/inventory").then(
      res => res.json()
    ).then(
      data => {
        setInventory(data)
        console.log(data)
      }
    )
  }, [])


  return (
    <div>
      <h1>BubbleFlow</h1>
      <h2>Inventory</h2>

      {inventory.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
      </div>
      ))}

      <BatchForm inventory={inventory}/>
    </div>
  );

}

export default App;