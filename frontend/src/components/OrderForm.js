import { useState } from 'react';

function OrderForm({ inventory, onOrderLogged }) {
    const [ingredientID, setIngredientID] = useState('');
    const [message, setMessage] = useState('');

    const logOrder = () => {
        fetch("http://localhost:5001/inventory/order", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ingredient_id: parseInt(ingredientID)
            })
        })
        .then(res => res.json())
        .then(data => {
            setMessage(data.message);
            onOrderLogged();
        })
        .catch(error => console.error('error:', error))
    }

    return (
        <div className="card">
            <h1>Log Order</h1>
            <select value={ingredientID} onChange={e => setIngredientID(e.target.value)}>
                <option key="default" value="">Select Ingredient</option>
                {inventory.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
            <button onClick={logOrder}>Log Sale</button>
            {message && <p>{message}</p>}
        </div>
    );
}
export default OrderForm;