import React, { useState } from 'react';
import axios from 'axios';
import ViewTicketsAdmin from './ViewTicketsAdmin';
import { useParams } from 'react-router-dom';
import UpdateTicket from './UpdateTicket';
import DeleteMovie from './DeleteMovie';


function AdminView() {
  const [isAdmin, setIsAdmin] = useState(false);
  checkAdminStatus();
  const { value }= useParams();
  async function checkAdminStatus() {
    try {
      const username = localStorage.getItem('username');

      const response = await axios.get('http://54.221.6.173:8000/api/v1.0/moviebooking/check_admin_status/', {
        params:{
            username : username
        }
      });
      setIsAdmin(response.data.is_valid_user);
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  }

  if (!isAdmin) {
    return <p className="fs-4 fw-bold text-center">You must be an admin to view this page.</p>;
  }

  if (value === 'viewticket') {
    return <ViewTicketsAdmin />;
  }
  if (value === 'deleteticket') {
    return <DeleteMovie />;
  }
  if (value === 'updateticket') {
    return <UpdateTicket />;
  }
}

export default AdminView;
