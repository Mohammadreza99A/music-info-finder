import React from 'react';

const Artist = (props) => {
  let { artist } = props;

  return (
    <React.Fragment>
      {' '}
      <div
        className="modal fade"
        id="artistModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="artistDetailModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {artist.name}
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
                    src={artist.picture_xl}
                    alt="Artist"
                  />

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="fas fa-sort-numeric-up-alt"></i> Number of
                      Albums : {artist.nb_album}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-users"></i> Number of fans:{' '}
                      {artist.nb_fan}
                    </li>

                    <li className="list-group-item">
                      <i className="fas fa-align-center"></i> Has Radio:{' '}
                      {artist.radio ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className="fas fa-times"></i>
                      )}
                    </li>
                    <li className="list-group-item">
                      <a
                        href={artist.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn btn-dark btn-block"
                      >
                        <i className="fab fa-deezer"></i> Deezer Artist Page
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

export default Artist;
