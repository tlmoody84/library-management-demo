import React from 'react';
import Welcome from '../../components/welcome';
import Navigation from '../../components/Navigation';

const Home = () => {
    return (
      <div>
        <Navigation />
        <main className="home">
          <h1>Welcome to my Portfolio!</h1>
          <p>I'm a newly self-motivated web developer with a strong desire to create user-friendly and impactful applications. Let's explore some of my work!</p>
        </main>
      </div>
    );
  };
  
export default Home;