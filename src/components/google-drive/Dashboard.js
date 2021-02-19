import React from 'react';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import AddFolderButton from './AddFolderButton';
import Navbar from './Navbar';

const Dashboard = () => {
  const { folder } = useFolder();

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </>
  );
};

export default Dashboard;
