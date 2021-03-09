import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const FolderBreadcrumbs = ({ currentFolder }) => {
  return (
    <Breadcrumb
      className='flex-grow-1'
      listProps={{ className: 'bg-white pl-0 m-0' }}
    ></Breadcrumb>
  );
};

export default FolderBreadcrumbs;
