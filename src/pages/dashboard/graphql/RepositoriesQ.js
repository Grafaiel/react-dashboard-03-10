import { gql } from '@apollo/client';

const RepositoriesQ = gql`
  query Repositories {
    repositoryOwner (login: "viniciusdacal") {
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
  }
`;

export default RepositoriesQ;