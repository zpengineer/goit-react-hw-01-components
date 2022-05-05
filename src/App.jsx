import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/Transactions';
import Section from 'components/Section';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <Section>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics stats={data} title="Upload stats" />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Section>
  );
}
