import React from 'react';

import { SearchTypes } from './SearchTypes';

const Search: React.FC<SearchTypes> = (props) => {
  const { search, handleSearch, placeholder = 'Search' } = props;

  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder={placeholder}
    />
  );
};

export default Search;
