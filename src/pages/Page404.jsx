import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h1>This page could not be found</h1>
      <Link to='/'>Back to home page</Link>
    </div>
  );
};

export default Page404;
