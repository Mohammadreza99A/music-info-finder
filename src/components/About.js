import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container className="mb-5 vh-100">
      <Helmet>
        <title>MIF | About</title>
      </Helmet>
      <div className="text-center">
        <h1 className="mb-5 display-4">About Page</h1>
        <p className="lead text-justify">
          An Application for finding all sorts of information regarding musics,
          singers and albums. This application uses{' '}
          <a href="https://developers.deezer.com/api">Deezer API</a> in order to
          get the information for any given title.
        </p>

        <p className="text-justify">
          Developper: <span className="lead">Mohammadreza Amini</span>
          <br />
          Email: <span className="lead">mohammadreza99a@yahoo.com</span>
        </p>
        <a
          href="https://www.facebook.com/mohammadreza.amini.33"
          rel="noopener noreferrer"
          target="_blank"
          className="fb-ic mx-2"
          style={{ fontSize: '2.5rem' }}
        >
          <i className="fab fa-facebook-f fa-lg"> </i>
        </a>
        <a
          href="https://www.instagram.com/mohammadreza99a/"
          rel="noopener noreferrer"
          target="_blank"
          className="ins-ic mx-2"
          style={{ fontSize: '2.5rem' }}
        >
          <i className="fab fa-instagram fa-lg"> </i>
        </a>
        <a
          href="https://github.com/Mohammadreza99A"
          target="_blank"
          rel="noopener noreferrer"
          className="github-ic mx-2"
          style={{ fontSize: '2.5rem' }}
        >
          <i className="fab fa-github fa-lg"> </i>
        </a>
        <hr />
        <Link to="/" className="btn btn-dark">
          <i className="fas fa-home"></i> Go Home
        </Link>
      </div>
    </Container>
  );
}

export default About;
