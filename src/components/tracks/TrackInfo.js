import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Album from './Album';
import Artist from './Artist';
import Spinner from '../layouts/Spinner';

// import track from '../../static_data/track';
// import album from '../../static_data/album';

const TrackInfo = (props) => {
  // setting up state members
  const [track, setTrack] = useState('');
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');

  useEffect(() => {
    // Sending request to api with track id to get the track information
    // and with album id to get album infotmation
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${props.match.params.id}`
      )
      .then((res) => {
        setTrack(res.data);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${res.data.album.id}`
        );
      })
      .then((res) => {
        setAlbum(res.data);
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${res.data.artist.id}`
        );
      })
      .then((res) => {
        setArtist(res.data);
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  if (
    track === undefined ||
    Object.keys(track).length === 0 ||
    album === undefined ||
    Object.keys(album).length === 0
  ) {
    return <Spinner />;
  } else {
    const trackDuration = moment.utc(track.duration * 1000).format('HH:mm:ss');
    return (
      <div className="container">
        <Link to="/" className="btn btn-dark btn-sm mb-4 ml-3">
          Go Back
        </Link>
        <div className="container">
          <div className="card shadow-lg mb-5 text-center">
            <div className="card-header h4">
              {track.title}{' '}
              <span className="text-secondary h5 text-muted"> by </span>
              {artist.name}
            </div>

            <div className="card-body shadow-lg">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <img
                    className="card-img-top"
                    src={album.cover_xl}
                    alt="Album Cover"
                  />
                </div>
                <div className="col-sm-6">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <i className="fas fa-clock"></i> Track Duration:{' '}
                      {trackDuration}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-sort-numeric-down"></i> Track
                      Position In Album: {track.track_position}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-drum"></i> Beats per Minute:{' '}
                      {track.bpm}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-signal"></i> Signal Strength:{' '}
                      {track.gain}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-align-center"></i> Explicite Lyrics:{' '}
                      {track.explicit_lyrics ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className="fas fa-times"></i>
                      )}
                    </li>
                    <li className="list-group-item">
                      <a
                        href={track.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn-block btn-success"
                      >
                        <i className="fas fa-play" /> Play
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href={track.share}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn-block btn-dark"
                      >
                        <i className="fa fa-share-alt" aria-hidden="true" />{' '}
                        Share
                      </a>
                    </li>
                    <li className="list-group-item">
                      <button
                        type="button"
                        className="btn btn-block btn-dark"
                        data-toggle="modal"
                        data-target="#artistModal"
                      >
                        <i className="fas fa-compact-disc" /> Artist Info
                      </button>
                    </li>
                    <li className="list-group-item">
                      <button
                        type="button"
                        className="btn btn-block btn-dark"
                        data-toggle="modal"
                        data-target="#albumModal"
                      >
                        <i className="fas fa-compact-disc" /> Album Details
                      </button>
                    </li>
                    <li className="list-group-item">
                      <p>
                        <button
                          className="btn btn-block btn-dark"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseContributers"
                          aria-expanded="false"
                          aria-controls="collapseContributers"
                        >
                          <i className="fas fa-users"></i> Contributors
                        </button>
                      </p>

                      <div className="collapse" id="collapseContributers">
                        <div className="card card-body">
                          {track.contributors.map((contributor) => (
                            <a
                              key={contributor.id}
                              href={contributor.link}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="btn btn-block btn-info"
                            >
                              <i className="fas fa-user-alt"></i>{' '}
                              {contributor.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-group mb-2" style={{ width: '100%' }}></div>

              {/* album details modal */}
              <Album album={album} />

              {/* artist details modal */}
              <Artist artist={artist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TrackInfo;
