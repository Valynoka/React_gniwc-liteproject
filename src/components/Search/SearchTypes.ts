import React from 'react';

export type SearchTypes = {
  search: string,
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string,
};
