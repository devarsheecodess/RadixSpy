from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS  # Import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

CORS(app) 

# MongoDB Config
app.config["MONGO_URI"] = "mongodb://localhost:27017/RadixSpy"
mongo = PyMongo(app)

# Schemas
class User:
    def __init__(self, username, password):
        self.username = username
        self.password = generate_password_hash(password)

@app.route('/')
def home():
    return 'Radix Spy Server'

# Signup route
@app.route('/signup', methods=['POST'])
def signup():
    username = request.json.get('username')
    password = request.json.get('password')

    if not username or not password:
        return jsonify(message="Username and password are required!"), 400

    existing_user = mongo.db.users.find_one({'username': username})
    if existing_user:
        return jsonify(message="Username already exists!"), 409

    new_user = User(username, password)

    try:
        mongo.db.users.insert_one({'username': new_user.username, 'password': new_user.password})
        return jsonify(message="Signup successful!"), 201
    except Exception as e:
        return jsonify(message=str(e)), 400

# Login route
@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if not username or not password:
        return jsonify(message="Username and password are required!"), 400

    existing_user = mongo.db.users.find_one({'username': username})
    if not existing_user:
        return jsonify(message="User not found!"), 404

    if not check_password_hash(existing_user['password'], password):
        return jsonify(message="Incorrect password!"), 400

    return jsonify(message="Login successful!"), 200

if __name__ == '__main__':
    app.run(debug=True)