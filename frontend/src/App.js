import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5001/inventory").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])


  return (
    <div>
      <h1>BubbleFlow</h1>
      <h2>Inventory</h2>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
      </div>
      ))}
    </div>
  );

}

export default App;