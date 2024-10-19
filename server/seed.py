from app import app
from models import *

with app.app_context():
    
    # Clear existing data
    db.session.query(user_projects).delete()
    db.session.commit()
    
    User.query.delete()
    Team.query.delete()  
    Project.query.delete()  
    
    
    # Create users with names
    # Create users with names and passwords
    u1 = User(username="Candy", email="candy@gmail.com", name="Candy", password="securepassword1")
    u2 = User(username="Kevin", email="kevin@gmail.com", name="Kevin", password="securepassword2")
    u3 = User(username="Abiud", email="abiud@gmail.com", name="Abiud", password="securepassword3")
    u4 = User(username="Nellie", email="nellie@gmail.com", name="Nellie", password="securepassword4")
    u5 = User(username="Mzungu", email="mzungu@gmail.com", name="Mzungu", password="securepassword5")
    u6 = User(username="Kamundi", email="kamundi@gmail.com", name="Kamundi", password="securepassword6")
    u7 = User(username="Matu", email="matu@gmail.com", name="Matu", password="securepassword7")
    u8 = User(username="Kiprotich", email="kiprotch@gmail.com", name="Kiprotich", password="securepassword8")
    u9 = User(username="Victor", email="victor@gmail.com", name="Victor", password="securepassword9")
    u10 = User(username="Nathan", email="nathan@gmail.com", name="Nathan", password="securepassword10")


    
    db.session.add_all([u1, u2, u3, u4, u5, u6, u7, u8, u9, u10])
    db.session.commit()
    
    # Create teams with team identifiers
    t1 = Team(title="Team 1", description="Team 1 description", team="Team Identifier 1", user=u1)
    t2 = Team(title="Team 2", description="Team 2 description", team="Team Identifier 2", user=u6)
    t3 = Team(title="Team 3", description="Team 3 description", team="Team Identifier 3", user=u4)
    t4 = Team(title="Team 4", description="Team 4 description", team="Team Identifier 4", user=u2)
    t5 = Team(title="Team 5", description="Team 5 description", team="Team Identifier 5", user=u1)

   
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