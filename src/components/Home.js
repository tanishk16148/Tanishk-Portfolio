import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
  return (
    <section className="home-section">
      <h1>
        Hi, I'm <span className="highlight">Tanishk Abinav</span>
      </h1>

      <h2 className="typewriter-line">
        I’m a{' '}
        <span className="typewriter-text">
          <Typewriter
            words={['Developer', 'Designer', 'UI/UX Designer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <p className="intro-text">
        A passionate front-end developer who crafts visually pleasing and accessible web experiences using React, HTML, and CSS.
      </p>

      {/* Use Link to navigate to /work */}
      <Link to="/work" className="btn-primary">Explore My Work</Link>
    </section>
  );
};

export default Home;
