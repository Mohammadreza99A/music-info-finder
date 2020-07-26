import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const Track = (props) => {
  const { track } = props;

  return (
    <Col md={4}>
      <Card className="mb-4 shadow-sm">
        <Card.Img variant="top" src={track.album.cover_big} alt="Cover" />
        <Card.Body className="shadow">
          <Card.Title>{track.artist.name}</Card.Title>
          <Card.Text>
            <strong>
              <i className="fas fa-play" /> Track
            </strong>{' '}
            : {track.title}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album
            </strong>
            : {track.album.title}
          </Card.Text>
          <Link
            to={`info/track/${track.id}`}
            className="card-link btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right " /> More Info
          </Link>
          <a
            href={track.link}
            rel="noopener noreferrer"
            target="_blank"
            className="card-link btn btn-dark btn-block"
          >
            <i className="fas fa-play" /> Play
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Track;
