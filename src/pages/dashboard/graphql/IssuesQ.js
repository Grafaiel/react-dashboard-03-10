import { gql } from '@apollo/client';

const IssuesQ = gql`
query Issues {
  repositoryOwner(login: "gustavoguanabara") {
    id
    repository(name: "html-css") {
      issues (first: 10 ){
        nodes {
          id
          title
          body
          resourcePath
        }
      }
    }
  }
}
`;

export default IssuesQ;