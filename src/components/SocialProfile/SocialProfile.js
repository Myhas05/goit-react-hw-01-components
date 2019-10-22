import React from 'react';
import T from 'prop-types';

import styles from './SocialProfile.module.css';

const SocialProfile = ({ user: { avatar, location, name, tag, stats } }) => {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="user avatar" className={styles.avatar} />
          <p className={styles.text}>{name}</p>
          <p className={styles.text}>@{tag}</p>
          <p className={styles.text}>{location}</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.textSpan}>Followers</span>
            <span className={styles.textSpan}>{stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.textSpan}>Views</span>
            <span className={styles.textSpan}>{stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.textSpan}>Likes</span>
            <span className={styles.textSpan}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

SocialProfile.propTypes = {
  user: T.shape({
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    avatar: T.string.isRequired,

    stats: T.shape({
      followers: T.number.isRequired,
      views: T.number.isRequired,
      likes: T.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SocialProfile;
