from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# Association table for user and project relationships
user_projects = db.Table('user_projects',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('project_id', db.Integer, db.ForeignKey('projects.id'), primary_key=True)
)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'  

    serialize_rules = ('-teams.user',)  

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(60), nullable=False)


    teams = db.relationship('Team', back_populates='user')  
    projects = db.relationship('Project', secondary=user_projects, back_populates='users', lazy=True)

    @validates('email')
    def validate_email(self, key, value):
        if '@' not in value:
            raise ValueError("Invalid email address")
        return value

class Team(db.Model, SerializerMixin):
    __tablename__ = 'teams'

    serialize_rules = ('-user.teams', '-user.projects',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80),  nullable=False)
    description = db.Column(db.String(120), nullable=False) 
    team = db.Column(db.String(120), nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', back_populates='teams')  

class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'
    
    serialize_rules = ('-users.projects',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)

    users = db.relationship('User', secondary=user_projects, back_populates='projects')