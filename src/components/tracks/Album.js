import React, { useState } from 'react';
import moment from 'moment';
import {
  Button,
  Modal,
  Container,
  Card,
  ListGroup,
  Collapse,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Album = ({ album }) => {
  const albumDuration = moment.utc(album.duration * 1000).format('HH:mm:ss');
  const albumRelease = moment(album.release_date, 'YYYY-MM-DD').format(
    'DD-MM-YYYY'
  );
  const [show, setShow] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [trackListOpen, setTrackListOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} block>
        <i className="fas fa-compact-disc" /> Album Details
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 id="exampleModalLongTitle">
              {album.title}
              <span className="text-secondary h5 text-muted"> by </span>
              {album.artist.name}
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Card>
              <Card.Img variant="top" src={album.cover_xl} alt="Album Cover" />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <i className="fas fa-calendar"></i> Release Date:{' '}
                  {albumRelease}
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fas fa-clock"></i> Album Duration:{' '}
                  {albumDuration}
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fas fa-compact-disc"></i> Label : {album.label}
                </ListGroup.Item>
                <ListGroup.Item>
                  <>
                    <Button
                      onClick={() => setGenreOpen(!genreOpen)}
                      aria-controls="genresAlbumCollaps"
                      aria-expanded={genreOpen}
                      variant="dark"
                      block
                    >
                      Genres
                    </Button>
                    <Collapse in={genreOpen}>
                      <div id="genresAlbumCollaps">
                        <Card.Body>
                          {album.genres.data.map((genre) => (
                            <h6 className="h6 text-center" key={genre.id}>
                              {genre.name}
                            </h6>
                          ))}
                        </Card.Body>
                      </div>
                    </Collapse>
                  </>
                </ListGroup.Item>
                <ListGroup.Item>
                  <>
                    <Button
                      onClick={() => setTrackListOpen(!trackListOpen)}
                      aria-controls="trackListAlbumCollaps"
                      aria-expanded={trackListOpen}
                      variant="dark"
                      block
                    >
                      Tracklist
                    </Button>
                    <Collapse in={trackListOpen}>
                      <div id="trackListAlbumCollaps">
                        <Card.Body>
                          {album.tracks.data.map((track) => (
                            <Link
                              key={track.id}
                              to={`${track.id}`}
                              target="_blank"
                              className="btn btn-info btn-block mg-b-4"
                            >
                              <i className="fas fa-music " /> {track.title}
                            </Link>
                          ))}
                        </Card.Body>
                      </div>
                    </Collapse>
                  </>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href={album.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn btn btn-dark btn-block"
                  >
                    <i className="fab fa-deezer"></i> Deezer Album Page
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Album;
