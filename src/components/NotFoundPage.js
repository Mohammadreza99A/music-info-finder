import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFoundPage() {
  return (
    <div className="container vh-100">
      <Helmet>
        <title>MIF | Page Not Found</title>
      </Helmet>
      <h1 className="display-1 text-center">404</h1>
      <div className="container">
        <p className="text-justify lead">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </p>
        <p className="text-center">
          <Link to="/" className="btn btn-dark mb-5 text-center">
            <i className="fas fa-home"></i> Go Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
