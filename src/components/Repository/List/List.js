import { useEffect, useState } from 'react';
import SimpleBar from "simplebar-react";
// import useApi from "../../../useApi";
import RepositoryCard from "../Card/Card";
import "./List.css";


export default function RepositoryList({ username }) {
  const [error, setError] = useState();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("github_token");
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
        query Repositories {
          repositoryOwner (login: "${username}") {
            id
            repositories(first: 10) {
              totalCount
              pageInfo {
                hasNextPage
                endCursor
              }
              nodes {
                id
                name
                stargazerCount
                forkCount
                primaryLanguage { name }
              }
            }
          }
        }`,
        variables: {},
      })
    }).then((r) => r.json())
      .then((data) => {
        setRepositories(data.data.repositoryOwner.repositories.nodes);
      })
  },[username])

  return (
    <div className="RepositoryList">
      <h3>
        {/* Repositories
        {loading && <span>Loading...</span>} */}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <div className="RepositoryList__content">

          {repositories?.map((repository) => (
            <RepositoryCard key={repository.full_name} repo={repository} />
          ))}

        </div>
      </SimpleBar>
    </div>
  );
}
