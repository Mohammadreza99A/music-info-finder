import React, { useContext } from 'react';
import { Context } from '../../context';
import Spinner from '../layouts/Spinner';
import { Card, Row } from 'react-bootstrap';

import Track from './Track';

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <Card className="shadow-lg mb-4 p-3">
          <Card.Body>
            <h3 className="text-center mb-4">Most Popular Tracks</h3>
            <Row>
              {track_list.map((item) => (
                <Track key={item.id} track={item} />
              ))}
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default Tracks;
