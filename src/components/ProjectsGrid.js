import React from 'react'
import '../styles/projects-grid.css'


const ProjectsGrid = () => {
    return (
        <div>
            <h1 className="section-title">Personal Projects</h1>
            <div className="projects-grid">
                <a className="project" href="https://github.com/IvanJMorales/car_for_u">
                    <div className="project-card">
                        <img src="/static/car-for-u-logo.png" className="project-image" width="250" height="200" alt="project 1" />
                        <p>A web application that uses React and Firebase.
                            This application pulls from the firebase database and 
                            presents the user with a list of cars from multiple dealerships.
                        </p>
                    </div>
                </a>
                <a className="project" href="https://github.com/IvanJMorales/mass-emailer">
                    <div className="project-card">
                    <img src="/static/to-the-masses-logo.png" className="project-image" width="250" height="200" alt="project 1" />
                        <p>A web application that uses React and AWS. 
                            This application allows the user to send emails with pdfs attached to a list of recipients.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectsGrid