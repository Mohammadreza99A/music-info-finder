import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="page-footer font-small text-light bg-dark">
      <Container className="text-center">
        <Row>
          <Col md={12} className="py-3">
            <div className="flex-center">
              <a
                href="https://www.facebook.com/mohammadreza.amini.33"
                rel="noopener noreferrer"
                target="_blank"
                className="fb-ic"
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {' '}
                </i>
              </a>
              <a
                href="https://www.instagram.com/mohammadreza99a/"
                rel="noopener noreferrer"
                target="_blank"
                className="ins-ic"
              >
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {' '}
                </i>
              </a>
              <a
                href="https://github.com/Mohammadreza99A"
                target="_blank"
                rel="noopener noreferrer"
                className="github-ic"
              >
                <i className="fab fa-github fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright : Mohammadreza Amini
      </div>
    </footer>
  );
};

export default Footer;
