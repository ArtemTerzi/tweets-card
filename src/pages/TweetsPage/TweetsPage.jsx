import LoadMoreBtn from '../../components/LoadMoreBtn';
import UserList from '../../components/UserList/UserList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operation';
import BackLink from 'components/BackLink';
import StatusFilter from 'components/StatusFilter';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, limit }));
  }, [dispatch, limit]);

  const increaseUsers = () => setLimit(limit + 4);

  return (
    <main>
      <BackLink />
      <StatusFilter />
      <UserList />
      <LoadMoreBtn increaseUsers={increaseUsers} />
    </main>
  );
};

export default TweetsPage;