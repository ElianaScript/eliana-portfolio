import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <h1 
                style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}
                data-aos="fade-up"
            >
                Hello World!
            </h1>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '2rem' }} data-aos="fade-right">
                <img 
                    src={"pfp.JPG"} 
                    alt="Eliana Liantonio" 
                    style={{ 
                        width: '200px', 
                        height: 'auto', 
                        borderRadius: '50%', 
                        marginRight: '2rem', 
                        flexShrink: 0 
                    }} 
                />
                <p style={{ fontSize: '1.2rem' }}>
                I’m Eliana, a front-end web developer with a passion for building clean,
                 accessible, and visually engaging user experiences. I recently completed
                the Full-Stack Web Development Bootcamp at the University of North Carolina
                at Charlotte, where I honed my skills in JavaScript, React, HTML/CSS, and
                responsive design.

                </p>
            </div>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                My career path has been anything but one-dimensional. I've worked as a barista at Starbucks, where I learned the art of multitasking and staying calm under pressure. I also served as the Office Manager for Level Up Dance, balancing organizational systems, client communication, and creative support.
            </p>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                During my time in the coding bootcamp, I began working as a Freelance Software Developer to gain additional real-world experience. These roles taught me how to adapt quickly, communicate clearly with clients, and translate ideas into functional, user-friendly applications.
            </p>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                I'm most passionate about front-end development and am currently focused on React, UI/UX design, and building applications that are both intuitive and enjoyable to use. Whether it's fine-tuning a component or debugging styling quirks, I’m always motivated by the opportunity to improve the user experience.
            </p>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                When I’m not coding, you can usually find me reading a good book, sipping on a matcha latte, or sketching out new app ideas. I believe a touch of creativity goes a long way in both design and problem-solving.
            </p>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                I’m currently open to opportunities where I can contribute as a front-end developer, grow with a supportive team, and continue creating thoughtful, impactful web experiences.
            </p>

            <p data-aos="fade-in" style={{ textAlign: 'center', marginTop: '3rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Want to connect? <a href="/contact" style={{ color: '#7F8FAE', textDecoration: 'underline' }}>Reach out here</a>—I’d love to hear from you.
            </p>
        </div>
    );
};

export default About;