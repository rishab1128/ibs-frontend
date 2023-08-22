import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import authService from '../services/authService';

const Profile = () => {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const result = await authService.profile();
      console.log(result);
      setUser(result.data)
    } catch (error) {
      toast.error(error.data.message);
    }
  }

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <ul className="list-group">
          <li className="list-group-item"><span className="fw-bold">Account Number</span> - {user?.accNo}</li>
          <li className="list-group-item"><span className="fw-bold">First Name</span> - {user?.firstName}</li>
          <li className="list-group-item"><span className="fw-bold">Last Name</span> - {user?.lastName}</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile