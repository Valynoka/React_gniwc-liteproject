import React from 'react';
import { observer } from 'mobx-react-lite';

import classes from './Search.module.scss';
import postsStore from '../../stores/postsStore';

type SearchProps = {
  search: string,
  placeholder?: string,
};

const Search: React.FC<SearchProps> = observer((props) => {
  const { placeholder = 'Search' } = props;
  const { searchValue, setFilterBySearch } = postsStore;
  // связываем input и массив данных
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterBySearch(e.target.value);
  };

  return (
    <div className={classes.search}>
      <input
        className={classes.search__input}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
});

export default Search;
