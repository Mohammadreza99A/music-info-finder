import React from 'react';
import { Pagination } from 'react-bootstrap';

const SearchPagination = (props) => {
  const {
    currentPage,
    getPrevPage,
    getFirstPage,
    search_res,
    getNextPage,
  } = props;

  return (
    <Pagination>
      {currentPage !== 1 && <Pagination.Prev onClick={getPrevPage} />}
      {currentPage !== 1 && (
        <Pagination.Item onClick={getFirstPage}>1</Pagination.Item>
      )}
      {currentPage > 2 && <Pagination.Ellipsis />}
      {currentPage > 2 && (
        <Pagination.Item onClick={getPrevPage}>
          {currentPage - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {typeof search_res.next !== 'undefined' && (
        <Pagination.Item onClick={getNextPage}>
          {currentPage + 1}
        </Pagination.Item>
      )}
      {typeof search_res.next !== 'undefined' && (
        <Pagination.Next onClick={getNextPage} />
      )}
    </Pagination>
  );
};

export default SearchPagination;
