import ReactDOM from 'react-dom';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Profile/Statistics/Statistics';
import FriendList from './components/Profile/FriendList/FriendList';
import TransactionHistory from './components/Profile/TransactionHistory/TransactionHistory';

export default function App(props) {
  return (
    <div>
      <Profile
        tag={user.tag}
        name={user.name}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
