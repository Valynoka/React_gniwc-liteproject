import React from 'react';

import styles from './PostTable.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

const PostTable: React.FC<SerialApiDataTypes> = (props) => {
  const { episode, title } = props;
  return (
    <table className={styles.postTable}>
      <tbody>
        <tr className={styles.postTable__td}>
          <td className={styles.postTable__num_td}>{episode}</td>
          <td className={styles.postTable__td}>{title}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PostTable;
