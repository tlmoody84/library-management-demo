import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <div className="about">
                <h2>About Me</h2>
                <p>I have a [Bachelor's] degree in [Criminal Justice] from [Fayetteville State University] along with a [Full Stack Developer Certificate] from [CodeEx Academy].</p>
                <p>My skills include [JavaScript, CSS, Bootstrap, HTML, React, and NodeJS].</p>
                <p>I have [2] years of experience in [frontend and backend of web applications].</p>
                {/* <img src="/images/your-image.jpg" alt="Your Photo" />  // Assuming image is in public folder */}
            </div>
        </div>
    );
};

export default About;