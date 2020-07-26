import React, { useState } from 'react';
import { Button, Modal, Container, Card, ListGroup } from 'react-bootstrap';

const Artist = ({ artist }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} block>
        <i className="fas fa-compact-disc" /> Artist Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 id="exampleModalLongTitle">{artist.name}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Card>
              <Card.Img variant="top" src={artist.picture_xl} alt="Artist" />
              <ListGroup className="text-center">
                <ListGroup.Item>
                  <i className="fas fa-sort-numeric-up-alt"></i> Number of
                  Albums : {artist.nb_album}
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fas fa-users"></i> Number of fans:{' '}
                  {artist.nb_fan}
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fas fa-align-center"></i> Has Radio:{' '}
                  {artist.radio ? (
                    <i className="fas fa-check"></i>
                  ) : (
                    <i className="fas fa-times"></i>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href={artist.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn btn btn-dark btn-block"
                  >
                    <i className="fab fa-deezer"></i> Deezer Artist Page
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

export default Artist;
