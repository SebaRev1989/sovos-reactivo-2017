import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h4>
        La estas <b>SECANDO</b>!! 
      </h4>
      <Link to="/"> uhh si, quiero volver! </Link>
    </div>
  );
};

export default NotFoundPage;
