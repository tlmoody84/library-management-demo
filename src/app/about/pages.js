import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        <div>
            <navigation />
            <div className="about">
                <h2>About Me</h2>
                <p>I have a Bachelor's degree in Criminal Justice from Fayetteville State University along with a Full Stack Developer Certificate from CodeEx Academy.</p>
                <p>My skills include JavaScript, CSS, Bootstrap, HTML, React, and NodeJS.</p>
                <p>I have 2 years of experience in frontend and backend of web applications.</p>
                <Image
        src="/images/pic.jpg" // Replace with your profile image path
        alt="My Profile Picture"
        width={200}
        height={200}
      />  
            </div>
        </div>
    );
};

export default About;
