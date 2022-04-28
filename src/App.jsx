import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/Transactions';
import Section from 'components/Section';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

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
