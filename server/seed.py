from app import app
from models import *

with app.app_context():
    
    # Clear existing data
    db.session.query(user_projects).delete()
    db.session.commit()
    
    User.query.delete()
    Team.query.delete()  # Updated from Project to Team
    Project.query.delete()  # Updated from Group to Project
    
    # Create users
    u1 = User(username="Candy", email="candy@gmail.com")
    u2 = User(username="Kevin", email="kevin@gmail.com")
    u3 = User(username="Abiud", email="abiud@gmail.com")
    u4 = User(username="Nellie", email="nellie@gmail.com")
    u5 = User(username="Mzungu", email="mzungu@gmail.com")
    u6 = User(username="Kamundi", email="kamundi@gmail.com")
    u7 = User(username="Matu", email="matu@gmail.com")
    u8 = User(username="Kiprotich", email="kiprotch@gmail.com")
    u9 = User(username="Victor", email="victor@gmail.com")
    u10 = User(username="Nithin", email="nithin@gmail.com")
    
    db.session.add_all([u1, u2, u3, u4, u5, u6, u7, u8])
    db.session.commit()
    
    # Create teams
    t1 = Team(title="Team 1", description="Team 1 description", user=u1)
    t2 = Team(title="Team 2", description="Team 2 description", user=u6)
    t3 = Team(title="Team 3", description="Team 3 description", user=u4)
    t4 = Team(title="Team 4", description="Team 4 description", user=u2)
    t5 = Team(title="Team 5", description="Team 5 description", user=u1)
    
    db.session.add_all([t1, t2, t3, t4, t5])
    db.session.commit()
    
    # Create projects
    p1 = Project(name="Project 1")
    p2 = Project(name="Project 2")
    p3 = Project(name="Project 3")
    p4 = Project(name="Project 4")
    p5 = Project(name="Project 5")
    
    db.session.add_all([p1, p2, p3, p4, p5])
    db.session.commit()
    
    # Add projects to users
    u1.projects.append(p5)
    u1.projects.append(p2)
    
    # Add users to projects
    p5.users.append(u2)
    p5.users.append(u5)
    
    p4.users.append(u3)
    p4.users.append(u1)
    
    db.session.commit()
