import React from 'react';

import FriendsList from '../FriendList';

import Profile from '../SocialProfile';

// import Statistic from '../Statistics';

// import Transaction from '../Transaction';

import friends from '../FriendList/friends.json';

import user from '../SocialProfile/user.json';

// import stats from '../Statistics/stats.json';

// import transactions from '../Transaction/transactions.json';

const App = () => {
  return (
    <div>
      <Profile user={user} />

      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
