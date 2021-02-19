import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContent';
import CenterContainer from './CenterContainer';

const Profile = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <CenterContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: {currentUser?.email}</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
        Create new account?
        <Button onClick={handleLogout} variant="link">
          Log Out
        </Button>
      </div>
    </CenterContainer>
  );
};

export default Profile;
