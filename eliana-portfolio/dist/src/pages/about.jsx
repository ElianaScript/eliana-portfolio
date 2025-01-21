import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import profilePhoto from '/profilePhoto.png';

function about () {
    return(
        <div className='about-page'>
            <h1>Eliana Liantonio</h1>
            <img src={profilePhoto} alt="cat avatar" />
            <p>Hello,</p>
            <p>✨ My name is Eliana Liantonio and this is my portfolio page. I have included projects that implement many languages that show my proficiency in HTML, CSS, and JavaScript on the front end. I am also proficient in node.js, React, Python, and C++. I have been programming since I was 11, and have decided after recieving my Associates Degree that I would puruse a career in Software Development. I have experience in a professional capacity, as well as a educational backround in programming. If I am not writing code then I am reading Steven King novels or researching Greek Mythology. I hope you enjoy my portfolio.✨</p>
        </div>
    )

}
export default about;