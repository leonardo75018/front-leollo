import React from 'react'
import { Link } from "react-router-dom"
import "./projects.css"
import { MdDelete } from "react-icons/md"





const Projects = ({ projects, setIproject, deleteProject }) => {






    return (
        <div id="projects-container">
            {
                projects.map(project =>
                    <div
                        className="project-card "
                        key={project.id}
                    >
                        <Link to={`/board/${project.id}`}>
                            <div className="card-container">
                                <div className="backdrop">  <img src="https://cdn.wf3.fr/wp-content/uploads/2020/07/WEBFORCE3-HD-18-600x400.jpg" alt="" />  </div>
                                <h2>{project.name}</h2>
                            </div>
                        </Link>

                        <div className="options">
                            <button
                                className="md-delete"
                                onClick={() => { deleteProject(project.id) }}
                            >
                                <MdDelete />

                            </button>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default Projects
