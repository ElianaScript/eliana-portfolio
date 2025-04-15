import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="contact-page"
            style={{
                backgroundColor: '#DCD6D0',
                color: '#7F8FAE',
                minHeight: '100vh',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            ></div>

            <h1 data-aos="fade-down" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                Let's Connect!
            </h1>

            <p data-aos="fade-up" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                Got a question or want to work together? Send me a personalized message—I'd love to hear from you!
            </p>

            <form
                data-aos="zoom-in"
                action="https://formspree.io/f/mldjvljd"
                method="POST"
                style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    padding: '1rem',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #7F8FAE',
                            marginTop: '0.5rem',
                            color: '#7F8FAE',
                        }}
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #7F8FAE',
                            marginTop: '0.5rem',
                            color: '#7F8FAE',

                        }}
                    />
                </label>

                <label>
                    Message
                    <textarea
                        name="message"
                        rows="5"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: '1px solid #7F8FAE',
                            marginTop: '0.5rem',
                            color: '#7F8FAE',
                            textAlign: 'center',
                        }}
                    />
                </label>

                <button
                    type="submit"
                    style={{
                        padding: '0.75rem',
                        backgroundColor: '#7F8FAE',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Submit
                </button>
            </form>

            <div data-aos="fade-in" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p>Prefer to reach out directly?</p>
                <p>
                    <a href="mailto:eliana.liantonio@gmail.com" style={{ color: '#7F8FAE', textDecoration: 'underline' }}>
                        eliana.liantonio@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
