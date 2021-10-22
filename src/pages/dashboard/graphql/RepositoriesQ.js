import { gql } from '@apollo/client';

const RepositoriesQ = gql`
  query Repositories($repositoryName: String!) {
    repositories: $repositoryName) {
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
          stargazers_count
          forks_count
          language
        }
      }
    }
  }
`;

export default RepositoriesQ;