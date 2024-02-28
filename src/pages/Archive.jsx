import React, { useContext } from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Wrapper from '../components/Wrapper';
import LanguageContext from '../context/LangContext';
// import { getArchivedNotes } from '../utils/data';
import language from '../utils/language';
import { options } from '../utils/optionFetch';
import { getArchivedNotes } from '../utils/data';

const Archive = () => {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState({});
  const [notes, setNotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { lang } = useContext(LanguageContext);
  const lan = language[lang].archive;
  console.log(lan);

  const getData = async () => {
    // const resUser = await getUserLogged({ options });
    const resArchivedNotes = getArchivedNotes();
    // const { data: user } = resUser;
    // setUser(user);
    setNotes(resArchivedNotes);
    setIsLoading((prev) => !prev);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar name={user.name} />
          <Search setSearch={(val) => setSearch(val)} />

          <Wrapper title={lan.title}>
            <>
              {notes.length === 0 ? (
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
    </div>
  );
};
export default Archive;
