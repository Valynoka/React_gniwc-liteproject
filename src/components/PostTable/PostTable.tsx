import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './PostTable.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import postsStore from '../../stores/postsStore';

const PostTable: React.FC<SerialApiDataTypes> = observer(() => {
  const { filteredPosts, setShowLess, setShowMore } = postsStore;
  console.log(filteredPosts);
  return (
    <div>
      <table className={styles.postTable}>
        <tbody>
          {filteredPosts.map((post) => (
            <tr className={styles.postTable__td} key={post.episode_id}>
              <td className={styles.postTable__num_td}>{post.episode}</td>
              <td className={styles.postTable__td}>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.postTable__button_wrapper}>
        <button className={styles.button} type="button" onClick={() => setShowMore()}>Показать еще</button>
        <button className={styles.button} type="button" onClick={() => setShowLess()}>Удалить</button>
      </div>

    </div>

  );
});

export default PostTable;
