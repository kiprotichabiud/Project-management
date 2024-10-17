from flask import Flask, make_response, jsonify, request
from models import *  # Ensure proper import of your models
from flask_migrate import Migrate

# Initialize Flask app
app = Flask(__name__)

# Create database connection configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///management.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # To suppress SQLAlchemy warnings

# Initialize database and migration handling
migrate = Migrate(app, db)
db.init_app(app)

# Route to check if the app is working
@app.route('/')
def index():
    return "Welcome to Flask"

# Route to handle both GET and POST for users
@app.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        # Fetch and return all users
        users = User.query.all()
        response = [user.to_dict() for user in users]
        return make_response(jsonify(response), 200)

    if request.method == 'POST':
        # Handle user creation
        data = request.get_json()
        new_user = User(username=data['username'], email=data['email'])
        db.session.add(new_user)
        db.session.commit()

        return make_response({'message': 'User created successfully'}, 201)

# Route to handle specific user actions (GET, DELETE, PATCH)
@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def user(id):
    user = User.query.get(id)
    if not user:
        return make_response({'error': 'User not found'}, 404)

    if request.method == 'GET':
        return make_response(user.to_dict(), 200)

    if request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return make_response({'message': 'User deleted successfully'}, 200)

    if request.method == 'PATCH':
        data = request.get_json()
        for attr, value in data.items():
            setattr(user, attr, value)
        db.session.commit()
        return make_response(user.to_dict(), 200)

# Route to handle both GET and POST for teams
@app.route('/teams', methods=['GET', 'POST'])
def teams():
    if request.method == 'GET':
        # Fetch and return all teams
        teams = Team.query.all()
        response = [team.to_dict() for team in teams]
        return make_response(jsonify(response), 200)

    if request.method == 'POST':
        # Handle team creation
        data = request.get_json()
        new_team = Team(title=data['title'], description=data['description'], user_id=data['user_id'])
        db.session.add(new_team)
        db.session.commit()

        return make_response({'message': 'Team created successfully'}, 201)

# Route to handle both GET and POST for projects
@app.route('/projects', methods=['GET', 'POST'])
def projects():
    if request.method == 'GET':
        # Fetch and return all projects
        projects = Project.query.all()
        response = [project.to_dict() for project in projects]
        return make_response(jsonify(response), 200)

    if request.method == 'POST':
        # Handle project creation
        data = request.get_json()
        new_project = Project(name=data['name'])
        db.session.add(new_project)
        db.session.commit()

        return make_response({'message': 'Project created successfully'}, 201)

# Running the app
if __name__ == '__main__':
    app.run(port=8080, debug=True)
