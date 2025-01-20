import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'

const contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <br></br>

        <form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>
                Email:
                <input type="email" name="email" required />
            </label>
            <br></br>
            <br></br>
            <br></br>
            <label>
                Message:
                <textarea type="message" rows="5" required></textarea>
            </label>
            <br></br>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
        <br></br>
        <br></br>
            <p>Email: <a href="mailto:eliana.liantonio@gmail.com">eliana.liantonio@gmail.com</a></p>
        </div>
        </div>
    );
};
export default contact;