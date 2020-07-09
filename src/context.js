import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_TRACKS':
//       return {
//         ...state,
//         track_list: action.payload,
//         heading: 'Search Results',
//       };
//     default:
//       break;
//   }
// };

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: 'Most Searched Tracks',
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    // getting the top 10 most searched songs from Deezer API
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart/0/tracks'
      )
      .then((res) => {
        setState({ track_list: res.data.data });
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}

// export class Provider extends Component {
//   state = {
//     track_list: [],
//     heading: 'Most Searched Tracks',
//     dispatch: (action) => this.setState((state) => reducer(state, action)),
//   };

//   componentDidMount() {
//     // getting the top 10 most searched songs from Deezer API
//     axios
//       .get(
//         'https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart/0/tracks'
//       )
//       .then((res) => {
//         this.setState({ track_list: res.data.data });
//       })
//       .catch((err) => console.error(err));
//   }

//   render() {
//     return (
//       <Context.Provider value={this.state}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

// export const Consumer = Context.Consumer;
