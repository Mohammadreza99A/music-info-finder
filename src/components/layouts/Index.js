import { Container } from 'react-bootstrap';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import Tracks from '../tracks/Tracks';
import SearchForm from './SearchForm';

const Index = () => {
  return (
    <Container>
      <Jumbotron fluid className="shadow-lg mb-4 p-4">
        <h1 className="display-4 text-center h1 search-title">
          <i className="fas fa-music"></i> Search For A Song, Artist or an Album
        </h1>
        <p className="lead text-center">
          Get the information for any song, artist or any album
        </p>
        <SearchForm />
      </Jumbotron>
      <Tracks />
    </Container>
  );
};

export default Index;
