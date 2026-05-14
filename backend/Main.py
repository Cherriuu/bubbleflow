from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

inventory = [
        {"id": 1, "name": "Taro", "quantity": 0, "oz_per_drink": 16},
        {"id": 2, "name": "Black", "quantity": 0, "oz_per_drink": 16},
        {"id": 3, "name": "Oolong", "quantity": 0, "oz_per_drink": 16},
        {"id": 4, "name": "Jasmine", "quantity": 0, "oz_per_drink": 16},
        {"id": 5, "name": "Thai", "quantity": 0, "oz_per_drink": 16}
]


@app.route('/inventory')
def get_inventory():
    return jsonify(inventory)


@app.route('/inventory/batch', methods = ['POST']) #sending data
def log_batch():
    data = request.get_json()
    ingredient_id = data['ingredient_id']
    liters = data['liters']
    buffer = 0.90

    ingredient_found = None
    for ingredient in inventory:
        if ingredient["id"] == ingredient_id:
            ingredient_found = ingredient
            total_oz = liters * 33.814 # convert liters input into oz
            safe_quantity = int((total_oz * buffer) / ingredient_found["oz_per_drink"])
            ingredient["quantity"] = ingredient_found["quantity"] + safe_quantity
            break

    if ingredient_found is None:
        return jsonify({"error": "Ingredient not found"}), 404
        
    return jsonify({
        "ingredient": ingredient_found["name"],
        "liters_made": liters,
        "safe_quantity": safe_quantity,
        "message": f"Updated {ingredient_found['name']} to {ingredient_found['quantity']} drinks"
    })
        

if __name__ == "__main__":
    app.run(debug=True, port=5001)





