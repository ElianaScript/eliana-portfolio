import React from 'react';
import '../index.css'
import  image1 from '/copy-and-paste.png'

const projects = [
    {
        name: 'Pre-work Study Guide',
        link: 'https://github.com/ElianaScript/prework-study-guide',
        image: 'copy-and-paste.png',
    }, 
    {
        name: 'README.md Generator',
        link: "https://github.com/ElianaScript/readme-generator-nodejs",
        image: 'copy-and-paste.png',
    },
    {
        name: 'Movie Genre Generator',
        link: "https://github.com/ElianaScript/firstproject1",
        image: 'copy-and-paste.png',
    },
    {
        name: 'Mock content management system',
        link: "https://github.com/ElianaScript/CMS-cli",
        image: 'copy-and-paste.png',
    },
    {
        name: 'My portfolio',
        link: "https://github.com/ElianaScript/eliana-portfolio",
        image: 'copy-and-paste.png',
    },
    {
        name: 'Book Reccomendation App',
        link: "https://github.com/ElianaScript/book-rec-app",
        image: 'copy-and-paste.png',
    },
]


const portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
           <ul className="portfolio-list">
            {projects.map((project,index) => (
                <li key={index}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.image} alt={project.name} />
                        <p>{project.name}</p>
                    </a>
                </li>
            ))}
            </ul>
            <footer>
            <p><b>Icon made by Pixel perfect from www.flaticon.com</b></p>
            </footer>
            </div>


            );
            };   
            
            export default portfolio;