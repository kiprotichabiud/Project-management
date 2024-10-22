from flask import Flask, jsonify, request  
from flask_sqlalchemy import SQLAlchemy
from models import db, User, Team, Project  
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/')
def index():
    return "Welcome to the User-Project-Team Management API!"

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])  

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()

    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "User already exists"}), 400
    
    # Create new user
    new_user = User(
        name=data['name'],
        username=data['username'],
        email=data['email'],
        password=data['password'] 
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict()), 201

@app.route('/teams', methods=['GET'])
def get_teams():
    teams = Team.query.all()
    return jsonify([team.to_dict() for team in teams])  

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([project.to_dict() for project in projects])  

@app.route('/projects', methods=['POST'])
def create_project():
    data = request.get_json()

    new_project = Project(
        name=data['name']
    )

    db.session.add(new_project)
    db.session.commit()
    return jsonify(new_project.to_dict()), 201

@app.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    user_data = user.to_dict()
    user_data['teams'] = [team.to_dict() for team in user.teams]
    user_data['projects'] = [project.to_dict() for project in user.projects]
    return jsonify(user_data)

# Run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  
    app.run(debug=True)
