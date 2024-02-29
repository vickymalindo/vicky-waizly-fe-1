import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import { addNote } from '../utils/data';

const AddNote = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = addNote({ title, body });
    const error = res;
    if (!error) {
      alert('Insert note success');
      navigate('/');
    } else {
      alert('Insert note failed');
    }
  };

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const resUser = await getUserLogged({ options });
  //     const { data: user } = resUser;
  //     setUser(user);
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <Navbar />
      <Form
        setBody={(val) => setBody(val)}
        setTitle={(val) => setTitle(val)}
        submit={(e) => handleSubmit(e)}
        limit={title.length}
      />
    </div>
  );
};

export default AddNote;
