import { useState } from 'react';
import { CREATE_ADMIN_URL } from '../../Urls/AdminUrl';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useAdmin = () => {
  const adminState = {
    name: '',
    email: '',
    password: '',
    // eslint-disable-next-line @typescript-eslint/camelcase
    admin_role: 'superadmin',
  };
  const [admin, setAdmin] = useState(adminState);
  const [creatingAdmin, setCreatingAdmin] = useState(false);

  const createAdminChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  const createAdmin = async (values, history) => {
    setCreatingAdmin(true);
    try {
      const response = await axios.post(`${CREATE_ADMIN_URL}`, values, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('ApiToken')}`,
        },
      });
      if (response.data.message === 'created') {
        setCreatingAdmin(false);

        history.push('/admin-users');
      }
    } catch (e) {
      //   console.log(e.response.data);
      //   console.log(typeof e.response.data.errors.email);
      //         data:
      // errors:
      // email: ["validation.unique"]
      // __proto__: Object
      //         message: "The given data was invalid."
      if (e.response.data.errors) {
        //temp error checkijg , need be to make this error respinse a a string
        if (typeof e.response.data.errors.email === 'object') {
          toast.info('Email already exists');
          //   console.log(e.response.data.errors.email);
        }
      }
      if (e.response.data.message === 'unauthorized.') {
        toast.info('Token Expired!');

        setTimeout(() => {
          history.push('login');
        }, 2000);
      }
      setCreatingAdmin(false);
    }
  };

  return { admin, createAdmin, createAdminChange, creatingAdmin };
};

export default useAdmin;
