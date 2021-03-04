import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Folder = ({ folder }) => {
  return (
    <Button
      as={Link}
      to={`/folder/${folder.id}`}
      variant='outline-dark'
      className='text-truncate-100'
    >
      <FontAwesomeIcon icon={faFolder} className='mr-2' />
      {folder.name}
    </Button>
  );
};

export default Folder;
