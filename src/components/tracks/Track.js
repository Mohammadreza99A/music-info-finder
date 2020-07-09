import React from 'react';
import { Link } from 'react-router-dom';

const Track = (props) => {
  const { track } = props;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={track.album.cover_big} alt="Cover" />
        <div className="card-body shadow">
          <h5 className="card-title">{track.artist.name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Track
            </strong>{' '}
            : {track.title}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album
            </strong>
            : {track.album.title}
          </p>
          <Link
            to={`info/track/${track.id}`}
            className="card-link btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right " /> More Info
          </Link>
          <a
            href={track.link}
            rel="noopener noreferrer"
            target="_blank"
            className="card-link btn btn-dark btn-block"
          >
            <i className="fas fa-play" /> Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Track;
