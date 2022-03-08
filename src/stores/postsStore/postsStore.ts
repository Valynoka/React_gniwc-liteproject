import React from 'react';
import { action, makeAutoObservable } from 'mobx';

import service from './postsStore.service';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

class PostsStore {
  posts: SerialApiDataTypes[] = [];

  filteredPosts: SerialApiDataTypes[] = [];

  searchValue = '';

  status: Status = 'deff';

  constructor() {
    makeAutoObservable(this, {
      setFilteredPostsBySearch: action.bound,
      setFilterBySearch: action.bound,
      setShowMore: action.bound,
      setShowLess: action.bound,
    });
    this.status = 'loading';
    service
      .getSomeData()
      .then((response) => { this.posts = response; })
      .then(() => { this.filteredPosts = this.posts.slice(0, 3); })
      .then(() => { this.status = 'loaded'; })
      .then(() => { this.status = 'error'; });
  }

  // Search
  setFilteredPostsBySearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.searchValue = event.target.value;
  }

  setFilterBySearch(search: string) {
    this.searchValue = search;
    if (search) {
      this.filteredPosts = this.filteredPosts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredPosts = this.posts.slice(0, 3);
    }
  }

  // Кнопки добавления и уменьшения
  setShowMore() {
    this.filteredPosts = this.posts.slice(0, this.filteredPosts.length + 3);
  }

  setShowLess() {
    this.filteredPosts = this.filteredPosts.slice(0, this.filteredPosts.length - 3);
  }
}

export default new PostsStore();
