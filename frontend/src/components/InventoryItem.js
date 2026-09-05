function InventoryItem({ item }) {
    return (
        <div className="inventory-item">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
        </div>
    );
}
export default InventoryItem;