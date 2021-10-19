import { useEffect, useState } from "react";
import UserList from '../../components/User/List/List';
import UserCard from '../../components/User/Card/Card';
import FollowersQ from './graphql/FollowersQ';
import './dashboard.css'


export default function PagesDashboard() {
  const [error, setError] = useState();
  const [followers, setFollowers] = useState([]);
  const [username] = useState(
    () => window.localStorage.getItem('github_username') || ''
  );

  useEffect(() => {
    const token = window.localStorage.getItem("github_token");
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        authorization: `bearer ${token}`
      },
      body: JSON.stringify({
        query: FollowersQ,
        variables: {
          username,
        },
      }),
    })
      .then((r) => r.json())
      .then((json) => {
        setFollowers(json.data.user.followers.nodes);
      }).catch((error) => {
        setError(error)
      });
  }, []);

  return (
    <div>
      <header className='PagesDashboard__topbar'>
        {username}
      </header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className='PagesDashboard__content'>
          <UserList title="Followers">
            {followers.map((follower) => (
              <UserCard key={follower.id} user={follower} />
            ))}
          </UserList>
        </section>
      )}
    </div>
  );
}
