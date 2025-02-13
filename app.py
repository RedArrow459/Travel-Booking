from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hotels')
def get_hotels():
    hotels = [
        {'name': 'Hotel A', 'location': [28.6139, 77.2090]},
        {'name': 'Hotel B', 'location': [28.6200, 77.2150]},
        # Add more hotels as needed
    ]
    return jsonify(hotels)

if __name__ == '__main__':
    app.run(debug=True)
