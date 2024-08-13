import React from "react"
import './LandingPage.css';

const LandingPage = () => {
    return(
        <div className="LandingPage">
        <header className="LandingHeader">
        <h1>Welcome to Project Manager</h1>
        <p>Manage your projects effectively with our intuitive tool.</p>
        <div className="cta-buttons">
            <a href="/register" className="button-primary">Get Started</a>
            <a href="/login"  className="btn-secondary">Login</a>
        </div>
        </header>

        <section className="features">

        <div className="feature">
          <h2>Organize Projects</h2>
          <p>Easily create and manage your projects with our comprehensive dashboard.</p>
        </div>

        <div className="feature">
          <h2>Track Tasks</h2>
          <p>Keep track of tasks and deadlines to ensure everything stays on schedule.</p>
        </div>

        <div className="features">
            <h2>Collaborate</h2>
            <p>Work together with your team and keep everyone on the same page.</p>
            </div>
        </section>

        <footer className="landing-footer">
        <p>&copy; 2024 Project Manager Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;