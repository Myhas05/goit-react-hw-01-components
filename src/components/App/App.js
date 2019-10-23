import React from 'react';
import FriendsList from '../FriendList';
import Profile from '../SocialProfile';
import Statistic from '../Statistics';
import Transaction from '../Transaction';
import friends from '../FriendList/friends.json';
import user from '../SocialProfile/user.json';
import stats from '../Statistics/stats.json';
import transactions from '../Transaction/transactions.json';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.AppBox}>
      <Profile user={user} />
      <Statistic title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <Transaction items={transactions} />
    </div>
  );
};

export default App;
