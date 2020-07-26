import React, { useContext } from 'react';
import { Context } from '../../context';
import { useHistory } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';

import Track from './Track';

const SearchResults = () => {
  const [state] = useContext(Context);
  const { search_res } = state;
  const history = useHistory();

  if (search_res === undefined || search_res.length === 0) {
    history.push('/'); // if there is nothing to be shown go back to Home
    return <></>;
  } else {
    return (
      <>
        <Card className="shadow-lg mb-4 p-3">
          <Card.Body>
            <h3 className="text-center mb-4">Search Results </h3>
            <Row>
              {search_res.map((item) => (
                <Track key={item.id} track={item} />
              ))}
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default SearchResults;
