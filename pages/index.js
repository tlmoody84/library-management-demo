import React from 'react';
import Welcome from '../components/Welcome';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Welcome />
        </div>
    );
};

export default Home;