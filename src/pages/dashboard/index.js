import { useState } from "react";
import UserList from '../../components/User/List/List';
import UserCard from '../../components/User/Card/Card';
import RepositoryList from '../../components/Repository/List/List';
import RepositoryCard from '../../components/Repository/Card/Card';
import FollowersQ from './graphql/FollowersQ';
import FollowingQ from './graphql/FollowingQ';
import { useQuery } from '@apollo/client';
import './dashboard.css'
import RepositoriesQ from './graphql/RepositoriesQ';


export default function PagesDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [username] = useState(
    () => window.localStorage.getItem('github_username') || ''
  );

  const {
    data: followers,
    error: followerError
  } = useQuery(FollowersQ, {
    variables: {
      username,
    },
  });

  const {
    data: following,
    error: followingError
  } = useQuery(FollowingQ, {
    variables: {
      username,
    },
  });

  const {
    data: repositories,
    error: repositoryError
  } = useQuery(RepositoriesQ, {
    variables: {
      username,
    },
  });

  const error = followerError || followingError || repositoryError;

  return (
    <div>
      <header className='PagesDashboard__topbar'>
        {username}
      </header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className='PagesDashboard__content'>
          <UserList title="Followers" loading={!following?.user.following.nodes.length}>
            {followers?.user.followers.nodes.map((follower) => (
              <UserCard
                key={follower.id}
                user={follower}
                isSelected={selectedUser === follower.login}
                onClick={() => setSelectedUser(follower.login)}
              />
            ))}
          </UserList>
          <UserList title="Following" loading={!following?.user.following.nodes.length}>
            {following?.user.following.nodes.map((following) => (
              <UserCard
                key={following.id}
                user={following}
                isSelected={selectedUser === following.login}
                onClick={() => setSelectedUser(following.login)}
              />
            ))}
          </UserList>
          <RepositoryList username={selectedUser} />
        </section>
      )}
    </div>
  );
}