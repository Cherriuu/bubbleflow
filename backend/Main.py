from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/inventory')
def get_inventory():
    inventory = [
        {"id": 1, "name": "Taro", "quantity": 50},
        {"id": 2, "name": "Black", "quantity": 50},
        {"id": 3, "name": "Oolong", "quantity": 50},
        {"id": 4, "name": "Jasmine", "quantity": 50},
        {"id": 5, "name": "Thai", "quantity": 50}
    ]
    return jsonify(inventory)

if __name__ == "__main__":
    app.run(debug=True, port=5001)





