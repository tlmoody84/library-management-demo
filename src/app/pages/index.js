import React from 'react';
import welcome from '../../components/welcome';
import navigation from '../../components/Navigation';

const Home = () => {
    return (
      <div>
        <navigation />
        <welcome />
        <main className="home">
          <h1>Welcome to my Portfolio!</h1>
          <p>I'm a newly self-motivated web developer with a strong desire to create user-friendly and impactful applications. Let's explore some of my work!</p>
        </main>
      </div>
    );
  };
  
export default Home;