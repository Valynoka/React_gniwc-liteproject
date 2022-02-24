import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Posts from '../Post';
import Search from '../Search';
import Loading from '../Loading';
import { SerialDataType } from '../../models/serialDataType';
import Error from '../Error';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Array<SerialDataType>>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => setSearch(event.target.value);

  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/episodes')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return <Error />;
  }

  return (

    <div>
      <Search search={search} handleSearch={handleSearch} />
      {
        loading
          ? <Loading />
          : <Posts data={posts} search={search} />
      }
    </div>
  );
};

export default App;
