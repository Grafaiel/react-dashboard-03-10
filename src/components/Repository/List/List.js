import { useEffect, useState } from 'react';
import './List.css';

const initialState = {
  error: undefined,
  data: undefined,
  loading: undefined,
}

export default function RepositoryList({
  username
}) {
  const [state, setState] = useState(initialState);
  const { data, error, loading } = state;
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=10&page=1`)
      .then((r) => r.json())
      .then((json) => {
        setState({
          ...initialState,
          data: json,
        });
      })
  }, [username]);

  return (
    <div className="RepositoryList">
      <h3>Repositories</h3>

      <div className="RepositoryList__content">
        {data?.map((repository) => (
          <div key={repository.full_name}>
            {repository.full_name}
          </div>
        ))}

      </div>
    </div>
  )
}