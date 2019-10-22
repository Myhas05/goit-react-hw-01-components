import React from 'react';
import T from 'prop-types';
import FriendItem from './FriendItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const allFreindItems = friends.map(freind => (
    <FriendItem key={freind.id} freind={freind} />
  ));

  return <ul className={styles.friendList}>{allFreindItems}</ul>;
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
