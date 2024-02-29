import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Wrapper from '../components/Wrapper';
import LanguageContext from '../context/LangContext';
import language from '../utils/language';
import { getActiveNotes } from '../utils/data';

const Active = () => {
  const [search, setSearch] = React.useState('');
  const [notes, setNotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { lang } = useContext(LanguageContext);
  const lan = language[lang].active;

  const getData = async () => {
    setTimeout(() => {
      const resActiveNotes = getActiveNotes();
      setNotes(resActiveNotes);
      setIsLoading((prev) => !prev);
    }, 1500);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Search setSearch={(val) => setSearch(val)} />

          <div className="px-12 mt-6">
            <Link
              to="/add-note"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-block"
            >
              {lan.buttonAdd}
            </Link>
          </div>
          <Wrapper title={lan.title}>
            <>
              {notes?.length === 0 ? (
                <p className="mt-2">{lan.empty}</p>
              ) : (
                notes
                  .filter((item) => item.title.toLowerCase().includes(search))
                  .map((val) => {
                    return (
                      <Card
                        key={val.id}
                        id={val.id}
                        title={val.title}
                        body={val.body}
                        date={val.createdAt}
                      />
                    );
                  })
              )}
            </>
          </Wrapper>
        </>
      )}
    </>
  );
};
export default Active;
