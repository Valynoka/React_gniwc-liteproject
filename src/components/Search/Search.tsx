import React from 'react';

import styles from './Search.module.scss';

type SearchProps = {
  search: string,
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string,

};

const Search: React.FC<SearchProps> = (props) => {
  const { search, handleSearch, placeholder = 'Search' } = props;

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
