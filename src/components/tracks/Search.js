import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { Context } from '../../context';

const Search = () => {
  const [state, setState] = useContext(Context);
  const firstRender = useRef(true);
  const [userInput, setUserInput] = useState('');
  const [trackTitle, setTrackTitle] = useState('');

  useEffect(() => {
    // don't render if it is the first render
    // necessary because if not the component keeps sending requests of undefined to API
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // searching the entered track in API and returning the result to dispatch so the state changes
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${trackTitle}`
      )
      .then((res) => {
        // let track_list = res.data.data;
        setState({
          ...state,
          track_list: res.data.data,
          heading: 'Search Results',
        });
      })
      .catch((err) => console.error(err));
  }, [trackTitle]);

  const findTrack = (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body shadow-lg mb-4 p-4">
      <h1 className="display-4 text-center h1 search-title">
        <i className="fas fa-music"></i> Search For A Song, Artist or an Album
      </h1>
      <p className="lead text-center">
        Get the information for any song, artist or any album
      </p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-dark btn-lg btn-block mb-5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
