import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: '',
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    // getting the top 10 most searched songs from Deezer API
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart/0/tracks'
      )
      .then((res) => {
        setState({
          track_list: res.data.data,
          heading: 'Most Searched Titles',
        });
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
