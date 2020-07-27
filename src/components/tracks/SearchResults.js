import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context';
import { useHistory } from 'react-router-dom';
import { Card, Row, Container } from 'react-bootstrap';

import Track from './Track';
import SearchPagination from './SearchPagination';

const SearchResults = () => {
  const [state, setState] = useContext(Context);
  const { search_res } = state;
  const history = useHistory();
  let [currentPage, setCurrentPage] = useState(1);

  const getNextPage = () => {
    if (typeof search_res.next !== 'undefined') {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${search_res.next}`)
        .then((res) => {
          setState({
            ...state,
            search_res: res.data,
          });
          setCurrentPage((prevPage) => prevPage + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  const getPrevPage = () => {
    if (typeof search_res.prev !== 'undefined') {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${search_res.prev}`)
        .then((res) => {
          setState({
            ...state,
            search_res: res.data,
          });
          setCurrentPage((prevPage) => prevPage - 1);
        })
        .catch((err) => console.log(err));
    }
  };

  const getFirstPage = () => {
    let query;
    if (typeof search_res.next !== 'undefined')
      query = search_res.next.split('index')[0];
    else if (typeof search_res.prev !== 'undefined')
      query = search_res.prev.split('index')[0];
    axios
      .get(`https://cors-anywhere.herokuapp.com/${query}`)
      .then((res) => {
        setState({
          ...state,
          search_res: res.data,
        });
        setCurrentPage(1);
      })
      .catch((err) => console.log(err));
  };

  if (
    typeof search_res === 'undefined' ||
    Object.keys(search_res).length === 0
  ) {
    // if there is nothing to be shown go back to Home
    history.push('/');
    return <></>;
  } else {
    return (
      <Container>
        <Card className="shadow-lg mb-4 p-3">
          <Card.Body>
            <h3 className="text-center mb-4">Search Results </h3>
            <SearchPagination
              currentPage={currentPage}
              getPrevPage={getPrevPage}
              getFirstPage={getFirstPage}
              search_res={search_res}
              getNextPage={getNextPage}
            />
            <Row>
              {search_res.data.map((item) => (
                <Track key={item.id} track={item} />
              ))}
            </Row>
            <SearchPagination
              currentPage={currentPage}
              getPrevPage={getPrevPage}
              getFirstPage={getFirstPage}
              search_res={search_res}
              getNextPage={getNextPage}
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default SearchResults;
