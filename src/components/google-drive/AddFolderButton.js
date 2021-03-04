import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContent';
import { database } from '../../firebase';

const AddFolderButton = ({ currentFolder }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const { currentUser } = useAuth();
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentFolder) return;
    // Create a folder
    database.folders.add({
      name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      // path: '',
      createdAt: database.getCurrentTimestamp(),
    });
    setName('');
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal} variant='outline-success'>
        <FontAwesomeIcon icon={faFolderPlus} />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
            <Button type='submit'>Add Folder</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddFolderButton;
