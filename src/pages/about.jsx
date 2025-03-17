import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import profilePhoto from '/profilePhoto.png';

function about () {
    return(
        <div className='about-page'>
            <h1>Welcome!</h1>
            <img src={profilePhoto} alt="cat avatar" />
            
        <section className="about-page">
            <p>
                My name is <strong>Eliana Liantonio</strong>, and I am a dedicated 
                Software Developer with a strong foundation in both front-end
                and back-end technologies. My portfolio showcases a diverse range of projects that highlight
                my expertise in <strong>HTML, CSS, and JavaScript on the front end, as well
                as Node.js, React, Python, and C++</strong> on the back end.
            </p>
        </section>

<br></br>

        <section className="experience-section">
            <h2>Technical Experience & Background</h2>
            <p>
              My journey in programming began at the age of 11, driven by an innate curiosity and passion
              for technology. Over the years, I have honed my skills through both 
              academic and professional experiences. After earning my <strong>Associate’s
              Degree</strong> in Arts, I committed to pursuing a career in <strong>Software 
              Development</strong>, continuously expanding my expertise and staying at the
              forefront of emerging technologies.
            </p>

            <br></br>

            <p>
              I have experience working in both <strong>professional</strong> and <strong>academic settings</strong>,
              where I have developed strong problem-solving skills, a deep understanding of software 
              engineering principles, and the ability to write clean, efficient, and maintainable code.
              Notably, I work as a <strong>Research Assistant</strong>, where I utilized Python for data analysis, automation,
              and computational modeling—strengthening my ability to work with complex datasets and develop scalable
              solutions. This role deepened my expertise in algorithm optimization and scientific computing while reinforcing
              my ability to write well-documented, reproducible code.
            </p>
            <br></br>

            <p>
            I invite you to explore my portfolio and the projects I have worked on.
            If you have any questions or would like to connect, please feel free to reach out. <strong>Thank you for visiting!</strong>
            </p>
        </section>
     </div>
    )

}
export default about;