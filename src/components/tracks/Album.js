import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Album = (props) => {
  let { album } = props;
  const albumDuration = moment.utc(album.duration * 1000).format('HH:mm:ss');
  const albumRelease = moment(album.release_date, 'YYYY-MM-DD').format(
    'DD-MM-YYYY'
  );

  return (
    <React.Fragment>
      {' '}
      <div
        className="modal fade"
        id="albumModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="albumDetailModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {album.title}{' '}
                <span className="text-secondary h5 text-muted"> by </span>
                {album.artist.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={album.cover_xl}
                    alt="Album Cover"
                  />

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="fas fa-calendar"></i> Release Date:{' '}
                      {albumRelease}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-clock"></i> Album Duration:{' '}
                      {albumDuration}
                    </li>

                    <li className="list-group-item">
                      <i className="fas fa-compact-disc"></i> Label :{' '}
                      {album.label}
                    </li>
                    <li className="list-group-item">
                      <p>
                        <button
                          className="btn btn-dark btn-block"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseGenres"
                          aria-expanded="false"
                          aria-controls="collapseGenres"
                        >
                          Genres
                        </button>
                      </p>
                      <div className="collapse" id="collapseGenres">
                        <div className="card card-body">
                          {album.genres.data.map((genre) => (
                            <h6 className="h6 text-center" key={genre.id}>
                              {genre.name}
                            </h6>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <p>
                        <button
                          className="btn btn-dark btn-block"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTracklist"
                          aria-expanded="false"
                          aria-controls="collapseTracklist"
                        >
                          Tracklist
                        </button>
                      </p>
                      <div className="collapse" id="collapseTracklist">
                        <div className="card card-body">
                          {album.tracks.data.map((track) => (
                            <Link
                              key={track.id}
                              to={`${track.id}`}
                              target="_blank"
                              className="btn btn-info  btn-block mg-b-4"
                            >
                              <i className="fas fa-music " /> {track.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <a
                        href={album.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn btn-dark btn-block"
                      >
                        <i className="fab fa-deezer"></i> Deezer Album Page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
