import React, { useEffect, useState } from 'react';

import Post from './Post';
import { SerialDataType } from '../../models/serialDataType';

type PostsProps = {
  data: Array<SerialDataType>,
  search?: string,
};

// выводим весь массив выбранных данных
const Posts: React.FC<PostsProps> = (props) => {
  const { data, search = '' } = props;
  const [filtered, setFiltered] = useState<Array<SerialDataType>>([]);

  // кнопка 'Показать еще'
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (search.length > 2) {
      const filteredPosts = data.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
      setFiltered(filteredPosts);
      setVisible(false);
    } else {
      setFiltered(data.slice(0, 3));
      setVisible(true);
    }
  }, [search, data]);

  const handleClick = () => {
    setFiltered(data.slice(0, filtered.length + 3));
  };

  return (
    <div className="posts">
      {filtered.map((post) => (
        <Post key={post.title} {...post} />
      ))}
      {
        visible && (filtered.length < data.length
        && <button type="button" onClick={handleClick}>Показать еще</button>)
      }
    </div>
  );
};

export default Posts;
