import { useState} from 'react'

function Batchform({ inventory, onBatchLogged }) {
    const[ingredientID, setIngredientID] = useState('');
    const[liters, setLiters] = useState('');
    const[message, setMessage] = useState('');
    const[boba, setBoba] = useState('');

    const logBatch = () => {
        fetch("http://localhost:5001/inventory/batch", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                liters: parseFloat(liters),
                ingredient_id: parseInt(ingredientID)
            })
        })
        .then(res => res.json())
        .then(data => console.log('success:', data))
        .catch(error => console.error('error:', error))
    }

    const logBoba = () => {
        fetch("http://localhost:5001/inventory/boba", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                bags: parseFloat(boba),
                ingredient_id: parseInt(ingredientID)
            })
        })
        .then(res => res.json())
        .then(data => console.log('success:', data))
        .catch(error => console.error('error', error))
    }

    return (
        <div>
             <h1>Log Batch</h1>
             <select onChange={e => setIngredientID(e.target.value)}>
                <option key ="default" value ="">Select Ingredient</option>
                {inventory.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
             </select>
             <input
             type = "number"
             placeholder={parseInt(ingredientID) === 6 ? "Bags made": "Liters made"}
             onChange={e => parseInt(ingredientID) === 6 ? setBoba(e.target.value) : setLiters(e.target.value)}
             />

        <button onClick={parseInt(ingredientID) === 6 ? logBoba : logBatch}></button>

        </div>

    );
}
export default Batchform;