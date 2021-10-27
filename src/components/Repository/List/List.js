import SimpleBar from "simplebar-react";
import "./List.css";


export default function RepositoryList({ title, children, loading }) {
  return (
    <div className="RepositoryList">
      <h3>
        {title}
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <ul className="RepositoryList__content">
          {children}
        </ul>
      </SimpleBar>
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