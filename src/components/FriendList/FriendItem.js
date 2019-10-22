import React from 'react';
import T from 'prop-types';

import styles from './FriendItem.module.css';

const FriendListItem = ({ freind }) => {
  const { avatar, name, isOnline } = freind;
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.statusGreen} />
      ) : (
        <span className={styles.statusRed} />
      )}
      <img className={styles.avatarIcon} src={avatar} alt="avatar" width="96" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  freind: T.shape({
    avatar: T.string.isRequired,
    name: T.string.isRequired,
    isOnline: T.bool.isRequired,
    id: T.number.isRequired,
  }).isRequired,
};

export default FriendListItem;
