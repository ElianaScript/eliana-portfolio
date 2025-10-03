import React from 'react';
import '../index.css';

const essays = [
    {
        name: 'Satanic Synonyms: Symbolism in British Literature',
        description: `"Satan is not a character to write incorrectly and is somehow also up for interpretation."`,
        link: "/essays/british-literature.pdf",
    },
    {
        name: "Stowe and Douglass: The Authors That Started a War",
        description: `"Douglass wrote about the unabashed tormenters who defined his formative years and shared a slew of unapologetic notions about the illusion granted to white Northerners by ignoring slavery."`,
        link: "essays/stowe-douglass-essay.pdf",
    },
    {
        name: "Puritan Faith Deciphered through Poetry and a Narrative",
        description: `"They were not exactly the same, but they knew what they believed in and inspired generations of authors to open a discourse over the things that make people human."`,
        link: "essays/puritan-literature.pdf",
    },
    {
        name: "Religion, Nature and Humanity: Wordsworth has done it again",
        description: `"Wordsworth wrote in a way that was meant to be definite and questionable simultaneously."`,
        link: "essays/romantic-essay.pdf",
    },
    {
        name: `The Burden of A Mother: Lili's Silent Narrative in "A Wall Of Fire Rising"`,
        description: `"Instead of submitting to a pathetic attempt at masculinity, she chooses to step back and allow the situation to diffuse. Like any true rebel, she knows it takes time to break the system."`,
        link: "essays/lit-analysis.pdf",
    }
];

const academic = () => {
    return (
        <div>
            <ul className="academic-list" style={{
                listStyleType: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}>
                {essays.map((essay, index) => (
                    <li key={index} data-aos="fade-in">
                        <a
                            href={essay.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: '#333'
                            }}
                        >
                            <div style={{
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                padding: '1rem',
                                backgroundColor: '#fff',
                                maxWidth: '600px',
                                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease-in-out'
                            }}>
                                <p style={{ margin: 0, fontSize: '1rem' }}>
                                    <i className="bi bi-journal-text" style={{ marginRight: "8px" }}></i>
                                    <bold>{essay.name}</bold>
                                </p>
                                <p style={{
                                    marginTop: '0.5rem',
                                    fontStyle: 'italic',
                                    fontSize: '0.95rem',
                                    color: '#555'
                                }}>
                                    {essay.description}
                                </p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default academic;
