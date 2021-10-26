import "./List.css";

export default function IssueList () {

  return (
    <div className="IssueList">
      <h3> Issues </h3>
    </div>
  );
}

// query Issues {
//   repositoryOwner(login: "gustavoguanabara") {
//     id
//     repository(name: "html-css") {
//       issues (first: 10 ){
//         nodes {
//           id
//           title
//           body
//           resourcePath
//         }
//       }
//     }
//   }
// }
