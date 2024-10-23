from app import app
from models import *

with app.app_context():
    
    # Clear existing data
    db.session.query(user_projects).delete()
    db.session.commit()
    
    User.query.delete()
    Team.query.delete()  
    Project.query.delete() 

    # Create users
    u1 = User(username="Candy", email="candy@gmail.com", name="CandyM", password="candy3546.")
    u2 = User(username="Kevin", email="kevin@gmail.com", name="KevinT", password="kevt815!")
    u3 = User(username="Abiud", email="abiud@gmail.com", name="AbiudK", password="abiu213#")
    u4 = User(username="Nellie", email="nellie@gmail.com", name="NellieY", password="nels5678!")
    u5 = User(username="Mzungu", email="mzungu@gmail.com", name="MzunguC", password="mzu670:X")
    u6 = User(username="Kamundi", email="kamundi@gmail.com", name="KamundiT", password="kamt9876!")
    u7 = User(username="Matu", email="matu@gmail.com", name="MatuM", password="matu4567!")
    u8 = User(username="Kiprotich", email="kiprotch@gmail.com", name="KiprotichK", password="kipr3456!")
    u9 = User(username="Victor", email="victor@gmail.com", name="VictorM", password="Xvic64830;")
    u10 = User(username="Nithin", email="nithin@gmail.com", name="NithinK", password="nith1234!")
    
    db.session.add_all([u1, u2, u3, u4, u5, u6, u7, u8])
    db.session.commit()
    
    # Create teams
    t1 = Team(title="Design", description="Design Team", team="Design", user=u4)
    t2 = Team(title="Development", description="Development Team", team="Development", user=u7)
    t3 = Team(title="Marketing", description="Marketing Team", team="Marketing", user=u6)
    t4 = Team(title="Support", description="Support Team", team="Support", user=u10)
    t5 = Team(title="Analystic", description="Data Analystic Team", team="Analystic", user=u3)
    t6 = Team(title="Design", description="Another Design Team", team="Design", user=u8)
    t7 = Team(title="Development", description="Another Development Team", team="Development", user=u5)
    t8 = Team(title="Marketing", description="Another Marketing Team", team="Marketing", user=u9)
    t9 = Team(title="Support", description="Another Support Team", team="Support", user=u1)
    t10 = Team(title="Analystic", description="Another Data Analystic Team", team="Analystic", user=u2)

    db.session.add_all([t1, t2, t3, t4, t5, t6, t7, t8, t9, t10])
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
    u2.projects.append(p4)
    
    # Add users to projects
    p5.users.append(u3)     
    p3.users.append(u6)
    p2.users.append(u7)
    p1.users.append(u4)
    p1.users.append(u8)
    p3.users.append(u9)
    p4.users.append(u10)
    p2.users.append(u5)

    db.session.commit()
