import React from 'react';
import { action, makeObservable } from 'mobx';

import service from './postsStore.service';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

class PostsStore {
  posts: SerialApiDataTypes[] = [];

  filteredPosts: SerialApiDataTypes[] = [];

  searchValue = '';

  constructor() {
    makeObservable(this, {
      setFilteredPostsBySearch: action.bound,
      setFilterBySearch: action.bound,

    });
    service.getSomeData()
      .then((response) => {
        this.posts = response;
      })
      .then(() => {
        this.filteredPosts = this.posts.slice(0, 3);
      });
  }

  // Search
  setFilteredPostsBySearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.searchValue = event.target.value;
  }

  setFilterBySearch(search: string) {
    this.searchValue = search;
    if (search) {
      this.filteredPosts = this.posts.filter((item) => item.title.toLowerCase().includes(search));
    } else {
      this.filteredPosts = this.posts;
    }
  }
  // Кнопки добавления и уменьшения
}

export default new PostsStore();
