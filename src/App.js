import React from 'react';

import Profile from './components/profile/Profile'
import Statistics from "./components/statistics/Statistics";

import data from "./data/data";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
        <Profile {...data.profile}/>
        <Statistics title='Upload stats' stats={data.statistics} />
        <FriendList friends={data.friends} />
        <TransactionHistory items={data.transactions} />
    </>
  );
}

export default App;
