import React from 'react';
import Search from '../tracks/Search';
import Tracks from '../tracks/Tracks';

function Index() {
  return (
    <div className="container">
      <Search />
      <Tracks />
    </div>
  );
}

export default Index;
