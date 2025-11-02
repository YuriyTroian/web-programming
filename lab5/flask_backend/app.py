from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from uuid import uuid4

app = Flask(__name__)
CORS(app) 

stones = [
    {
        "id": str(uuid4()),
        "title": "Diamond",
        "description": "It is a beautiful jewelry stone",
        "price": "1000",
    },
    {
        "id": str(uuid4()),
        "title": "Rubin",
        "description": "It is a beautiful jewelry stone",
        "price": "800",
    },
    {
        "id": str(uuid4()),
        "title": "Smaragd",
        "description": "It is a beautiful jewelry stone",
        "price": "900",
    },
]

@app.route('/api/stones', methods=['GET'])
def get_stones():
    current_stones = stones
    
    search_term = request.args.get('search', '').lower().strip()
    if search_term:
        words = search_term.split()
        current_stones = [
            stone for stone in current_stones 
            if all(word in (stone['title'].lower() + stone['description'].lower()) for word in words)
        ]

    sort_order = request.args.get('sort', 'asc').lower() 
    
    def sort_key(stone):
        try:
            return float(stone['price'])
        except ValueError:
            return 0

    if sort_order == 'desc':
        current_stones.sort(key=sort_key, reverse=True)
    elif sort_order == 'asc':
        current_stones.sort(key=sort_key, reverse=False)

    return jsonify(current_stones)

@app.route('/api/stones', methods=['POST'])
def create_stone():
    data = request.get_json()
    
    if not data or 'title' not in data or 'description' not in data or 'price' not in data:
        abort(400, description="Missing required fields: title, description, or price.")

    new_stone = {
        "id": str(uuid4()),
        "title": data['title'],
        "description": data['description'],
        "price": data['price']
    }
    stones.append(new_stone)
    
    return jsonify(new_stone), 201 

@app.route('/api/stones/<string:id>', methods=['PUT'])
def update_stone(id):
    data = request.get_json()
    stone_index = next((i for i, stone in enumerate(stones) if stone['id'] == id), None)

    if stone_index is None:
        abort(404, description="Stone not found")
        
    current_stone = stones[stone_index]

    current_stone.update({
        "title": data.get('title', current_stone['title']),
        "description": data.get('description', current_stone['description']),
        "price": data.get('price', current_stone['price'])
    })
    
    return jsonify(current_stone)

@app.route('/api/stones/<string:id>', methods=['DELETE'])
def delete_stone(id):
    global stones
    initial_length = len(stones)
    
    stones = [stone for stone in stones if stone['id'] != id]

    if len(stones) == initial_length:
        abort(404, description="Stone not found")

    return '', 204

@app.route('/api/stones/total-price', methods=['GET'])
def get_total_price():
    current_stones = stones
    
    search_term = request.args.get('search', '').lower().strip()
    if search_term:
        words = search_term.split()
        current_stones = [
            stone for stone in current_stones 
            if all(word in (stone['title'].lower() + stone['description'].lower()) for word in words)
        ]
        
    total = 0.0
    for stone in current_stones:
        try:
            total += float(stone.get('price', 0))
        except ValueError:
            pass

    return jsonify({"total_price": round(total, 2)}) 


if __name__ == '__main__':
    app.run(debug=True, port=3000)