import React from "react";

export default function Projects(projectData) {

    
    return (
        <div>
            <header className="container">
                <h1> Projects: </h1>
            </header>
            <ul>
                {projectData.map((project)=>(
                   <li className="list-group-item" >
                    {`${project.name} ${project.description}`}
                   </li>
                ))}
            </ul>
        </div>
    );
}