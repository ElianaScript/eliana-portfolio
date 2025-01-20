import React from 'react';
import '../index.css'
import resumePortfolio from '/resume.portfolio.png'


const resume = () => {
    return (
<div>
    <h1>Resume</h1>
    <a href={resumePortfolio} download>✨Click here to download🌙</a>
</div>
    );

};

export default resume;