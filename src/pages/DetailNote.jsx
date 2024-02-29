import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LanguageContext from '../context/LangContext';
import {
  showFormattedDate,
  getNote,
  moveNote,
  deleteNote,
} from '../utils/data';

const DetailNote = () => {
  const [note, setNote] = React.useState({});
  const [loadingMove, setLoadingMove] = React.useState(false);
  const [loadingDelete, setLoadingDelete] = React.useState(false);
  const { id } = useParams();
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getData = () => {
      const res = getNote(+id);
      const data = res;
      setNote(data);
    };
    getData();
  }, []);

  const handleDelete = () => {
    const confirmation = confirm('Are you sure want to delete?');
    if (confirmation) {
      setLoadingDelete((prev) => !prev);
      setTimeout(() => {
        const res = deleteNote(+id);
        const error = res;
        if (error) {
          alert('Error, cant delete data');
        } else {
          alert('Success delete data');
          navigate(-1);
        }
        setLoadingDelete((prev) => !prev);
      }, 1100);
    }
  };

  const handleMove = async () => {
    setLoadingMove((prev) => !prev);
    setTimeout(() => {
      if (!note.archived) {
        moveNote(+id);
        alert('Success archived note');
        navigate(-1);
      } else {
        moveNote(+id);
        alert('Success actived note');
        navigate(-1);
      }
      setLoadingMove((prev) => !prev);
    }, 1100);
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
              {loadingMove ? (
                <svg
                  aria-hidden="true"
                  className="inline w-5 h-5 text-gray-400 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : note.archived === false ? (
                lang === 'en' ? (
                  'Done'
                ) : (
                  'Selesai'
                )
              ) : lang === 'en' ? (
                'Active'
              ) : (
                'Aktif'
              )}
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 inline-block w-1/2"
              onClick={handleDelete}
            >
              {loadingDelete ? (
                <svg
                  aria-hidden="true"
                  className="inline w-5 h-5 text-gray-400 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : lang === 'en' ? (
                'Delete'
              ) : (
                'Hapus'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNote;
