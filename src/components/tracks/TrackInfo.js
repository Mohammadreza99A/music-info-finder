import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  Collapse,
  Button,
} from 'react-bootstrap';

import Album from './Album';
import Artist from './Artist';
import Spinner from '../layouts/Spinner';

const TrackInfo = (props) => {
  // setting up state members
  const [track, setTrack] = useState('');
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [contributersOpen, setContributersOpen] = useState(false);

  useEffect(() => {
    // Sending request to api with track id to get the track information
    // and with album id to get album infotmation
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${props.match.params.id}`
      )
      .then((res) => {
        setTrack(res.data);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${res.data.album.id}`
        );
      })
      .then((res) => {
        setAlbum(res.data);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${res.data.artist.id}`
        );
      })
      .then((res) => {
        setArtist(res.data);
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  if (
    track === undefined ||
    Object.keys(track).length === 0 ||
    album === undefined ||
    Object.keys(album).length === 0
  ) {
    return (
      <div>
        <Helmet>
          <title>MIF | Music Information</title>
        </Helmet>
        <Spinner />
      </div>
    );
  } else {
    const trackDuration = moment.utc(track.duration * 1000).format('HH:mm:ss');
    return (
      <Container>
        <Helmet>
          <title>MIF | Music Information</title>
        </Helmet>
        <Link to="/" className="btn btn-dark btn-sm mb-4 ml-3">
          Go Back
        </Link>
        <Container>
          <Card className="shadow-lg mb-5 text-center">
            <Card.Header className="h4">
              {track.title}{' '}
              <span className="text-secondary h5 text-muted"> by </span>
              {artist.name}
            </Card.Header>

            <Card.Body className="shadow-lg">
              <Row className="mb-2">
                <Col sm={6}>
                  <img
                    className="card-img-top"
                    src={album.cover_xl}
                    alt="Album Cover"
                  />
                </Col>
                <Col sm={6}>
                  <ListGroup>
                    <ListGroup.Item>
                      <i className="fas fa-clock"></i> Track Duration:{' '}
                      {trackDuration}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fas fa-sort-numeric-down"></i> Track
                      Position In Album: {track.track_position}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fas fa-drum"></i> Beats per Minute:{' '}
                      {track.bpm}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fas fa-signal"></i> Signal Strength:{' '}
                      {track.gain}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fas fa-align-center"></i> Explicite Lyrics:{' '}
                      {track.explicit_lyrics ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className="fas fa-times"></i>
                      )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a
                        href={track.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn-block btn-success"
                      >
                        <i className="fas fa-play" /> Play
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a
                        href={track.share}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn-block btn-dark"
                      >
                        <i className="fa fa-share-alt" aria-hidden="true" />{' '}
                        Share
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Artist artist={artist} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Album album={album} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <>
                        <Button
                          onClick={() => setContributersOpen(!contributersOpen)}
                          ria-controls="contributersCollaps"
                          aria-expanded={contributersOpen}
                          variant="dark"
                          block
                        >
                          Contributors
                        </Button>
                        <div id="contributersCollaps">
                          <Collapse in={contributersOpen}>
                            <Card.Body>
                              {track.contributors.map((contributor) => (
                                <a
                                  key={contributor.id}
                                  href={contributor.link}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="btn btn-block btn-info"
                                >
                                  <i className="fas fa-user-alt"></i>{' '}
                                  {contributor.name}
                                </a>
                              ))}
                            </Card.Body>
                          </Collapse>
                        </div>
                      </>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <div className="btn-group mb-2" style={{ width: '100%' }}></div>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
};

export default TrackInfo;
