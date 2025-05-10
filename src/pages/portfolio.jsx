import React from 'react';
import '../index.css'

const projects = [
    {
        name: 'Genrefy',
        tech: 'HTML, JavaScript, CSS',
        description: 'A web application that allows users to rate and review their favorite genre of movies and find their preferred genre',
        link: "https://elianascript.github.io/firstproject1/",
    },
    {
        name: 'My Favorite Anime List',
        tech: 'HTML, CSS, Vue.js',
        description: `A web application that allows users to save their favorite animes to a list using Vue's reactive components.`,
        link: "https://elianascript.github.io/VueTest/",
    },
    {
        name: 'Portfolio Website',
        tech: 'HTML, JavaScript, CSS (Bootstrap), React',
        description: 'A personal portfolio website to showcase web projects, writing samples, and my resume. Built with React and styles with Bootstrap for a clean and responsive design.',
        link: "https://elianaliantonioportfolio.netlify.app/",
    },
    {
        name: 'novel idea',
        tech: 'HTML, JavaScript, React, Chakra UI',
        description: 'A full-stack book discovery platform featuring writing prompts, book reviews, and personalized recommendations.',
        link: "https://book-rec-app.onrender.com/",
    },
    {
        name: 'README.md generator',
        tech: 'Node.js',
        description: 'A command-line tool that automatically generates a professional README files for Github projects based on user input.',
        link: "https://github.com/ElianaScript/readme-generator-nodejs"
    }
];

const Portfolio = () => {
    return (
        <ul className="portfolio-list" style={{
            listStyleType: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
        }}>
            {projects.map((project, index) => (
                <li
                    key={index}
                    data-aod="fade-in"
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '1rem',
                        backgroundColor: '#fff',
                        maxWidth: '600px',
                        boxShadow: '2px 2px 10px rgba(0,0,0,0.05)'
                    }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>
                            <i className="bi bi-code-slash" style={{ marginRight: "8px" }}></i>
                            {project.name}
                        </h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{project.tech}</p>
                        <p>{project.description}</p>
                    </a>
                </li>
            ))}
        </ul>



    );
};

export default Portfolio;