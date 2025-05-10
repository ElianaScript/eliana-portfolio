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
                    I’m Eliana Liantonio, a developer, writer, and researcher
                    currently pursuing my BA in English with plans to earn a
                    Master’s in Library and Information Science. I earned my
                    Associate’s in Arts in 2023 with a focus on English and
                    Computer Science, and I’m passionate about combining
                    technology, storytelling, and information access in everything I do.
                </p>
            </div>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                Professionally, I’ve contributed to both creative and technical
                projects. As a freelance developer for LiftCertain, I’ve built
                web APIs and supported backend architecture for real-world use cases.
                I also contributed to a research project focused on forecasting the S&P
                500 using SARIMAX models. My role involved optimizing Python code in
                Jupyter Notebook, fine-tuning model parameters, and interpreting results
                to support a successful academic publication.
            </p>

            <p data-aos="fade-up" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                Whether I’m coding interactive web applications or analyzing literary texts,
                I care deeply about user experience, clarity, and accessibility. My long-term
                goal is to bridge the worlds of digital systems and human learning, whether
                in a library, a classroom, or an open-source project.
            </p>

            <p data-aos="fade-in" style={{ textAlign: 'center', marginTop: '3rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Want to connect? <a href="/contact" style={{ color: '#7F8FAE', textDecoration: 'underline' }}>Reach out here</a>—I’d love to hear from you.
            </p>
        </div>
    );
};

export default About;