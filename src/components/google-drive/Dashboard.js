import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFolder } from '../../hooks/useFolder';
import AddFolderButton from './AddFolderButton';
import Folder from './Folder';
import FolderBreadcrumbs from './FolderBreadcrumbs';
import Navbar from './Navbar';

const Dashboard = () => {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className='d-flex align-items-center mb-2'>
          <FolderBreadcrumbs currentFolder={folder} />

          <AddFolderButton currentFolder={folder} />
        </div>

        {childFolders?.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFolders.map((item) => (
              <div key={item.id} style={{ maxWidth: '250px' }} className='p-2'>
                <Folder folder={item} />
              </div>
            ))}
          </div>
        )}
        {folder && <Folder folder={folder} />}
      </Container>
    </>
  );
};

export default Dashboard;
