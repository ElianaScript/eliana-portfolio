import React from 'react';
import '../index.css'
//import  image1 from '/copy-and-paste.png'

const projects = [
    {
        name: 'Movie Genre Generator',
        link: "https://github.com/ElianaScript/firstproject1",
    },
    {
        name: 'Mock content management system',
        link: "https://github.com/ElianaScript/CMS-cli",
    },
    {
        name: 'My portfolio',
        link: "https://elianaliantonioportfolio.netlify.app/",
    },
    {
        name: 'novel idea',
        link: "https://book-rec-app.onrender.com/",
    },
]


const portfolio = () => {
    return (
        <div>
            <h1 className="portfolio-title" style={{ textAlign:'center'}}>My Projects</h1>


            <ul className="portfolio-list" style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image}/>
                            <p>
                                <i className="bi bi-code-slash" style={{ marginRight: "8px" }}></i>
                                {project.name}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>


    );
};

export default portfolio;