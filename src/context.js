import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    search_res: {},
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        'https://mohammadreza-cors-everywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks'
      )
      .then((res) => {
        setState({
          track_list: res.data.data,
        });
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
