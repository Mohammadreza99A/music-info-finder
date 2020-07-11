import React, { useContext } from 'react';
import { Context } from '../../context';
import Spinner from '../layouts/Spinner';

import Track from './Track';

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="card card-body shadow-lg mb-4 p-3">
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {track_list.map((item) => (
              <Track key={item.id} track={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Tracks;
