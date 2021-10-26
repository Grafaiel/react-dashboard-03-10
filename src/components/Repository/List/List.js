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
      }).catch((error) => {
        setError(error)
      });
  }, [username])

  return (
    <div className="RepositoryList">
      <h3>
        Repositories
        {!repositories?.length && <span>Loading...</span>}
      </h3>
      {error ? (
        <div>Algo de errado</div>
      ) :
        <SimpleBar style={{ maxHeight: 500 }}>
          <ul className="RepositoryList__content">
            {repositories?.map((repository) => {
              console.log(repository);
              return (
                  <RepositoryCard key={repository.id} repo={repository} />
              )
            })}
          </ul>
        </SimpleBar>
      }
    </div>
  );
}

// # Type queries into this side of the screen, and you will 
// # see intelligent typeaheads aware of the current GraphQL type schema, 
// # live syntax, and validation errors highlighted within the text.

// # We'll get you started with a simple query showing your username!
// query Repositories {
//           repositoryOwner (login: "grafaiel") {
//             id
//             repositories(first: 10) {
//               totalCount
//               pageInfo {
//                 hasNextPage
//                 endCursor
//               }
//               nodes {
//                 id
//                 name
//                 stargazerCount
//                 forkCount
//                 primaryLanguage { name }
//               }
//             }
//           }
//         }

// query Repositories {
//   repositoryOwner (login: "viniciusdacal") {
//     id
//     repositories(first: 10) {
//       totalCount
//       pageInfo {
//         hasNextPage
//         endCursor
//       }
//       nodes {
//         id 
//         name 
//         stargazerCount
//         forkCount
//         primaryLanguage { name }
//         issues (first: 10 ) {
//           nodes {
//             id
//             title
//             body
//             resourcePath
//           }
          
//         }
//       }
//     }
//   }
// }