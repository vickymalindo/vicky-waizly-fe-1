import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LanguageContext from '../context/LangContext';
// import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/data';

import { showFormattedDate, getNote, moveNote } from '../utils/data';

const DetailNote = () => {
  const [note, setNote] = React.useState({});
  const { id } = useParams();
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getData = async () => {
      const res = getNote(+id);
      const data = res;
      setNote(data);
    };
    getData();
  }, []);

  const handleDelete = async () => {
    const confirmation = confirm('Are you sure want to delete?');
    if (confirmation) {
      const res = await deleteNote(id);
      const { error } = res;
      if (!error) {
        navigate(-1);
      }
    }
  };

  const handleMove = async () => {
    if (!note.archived) {
      moveNote(+id);
      alert('Success archived note');
      navigate('/');
    } else {
      moveNote(id);
      alert('Success actived note');
      navigate('/notes-archive');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="my-12 shadow-lg shadow-slate-700 hover:-translate-y-2 transition-all cursor-pointer w-max mx-auto">
        <div className="w-72 border rounded-md h-max">
          <div className="pt-4 pr-4 pl-4 h-[260px]">
            <h5 className="font-bold mb-2 uppercase text-lg  w-full text-ellipsis overflow-hidden whitespace-nowrap">
              {note.title}
            </h5>
            <span className="text-slate-400 inline-block text-sm text-end w-full">
              {showFormattedDate(note.createdAt)}
            </span>
            <p className="text-[15px] h-[184px]">{note.body}</p>
          </div>
          <div className="flex justify-between items-center gap-2 pb-4 pr-4 pl-4">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900 inline-block w-1/2"
              onClick={handleMove}
            >
              {note.archived === false
                ? lang === 'en'
                  ? 'Archive'
                  : 'Arsip'
                : lang === 'en'
                ? 'Active'
                : 'Aktif'}
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 inline-block w-1/2"
              onClick={handleDelete}
            >
              {lang === 'en' ? 'Delete' : 'Hapus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNote;
