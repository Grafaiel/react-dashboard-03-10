import SimpleBar from 'simplebar-react';
import './List.css';


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
  )
  // const { data, error, loading } = useApi({
  //   url: `https://api.github.com/users/${username}/repos?per_page=10&page=1`
  // });
  // return (
  //   <div className="RepositoryList">
  //     <h3>
  //       Repositories
  //       {loading && <span>Loading...</span>}
  //     </h3>
  //     <SimpleBar style={{ maxHeight: 500 }}>
  //       <div className="RepositoryList__content">
  //         {error ? (
  //           <div>
  //             Algo de errado, não está certo!
  //           </div>
  //         ) : (
  //           data?.map((repository) => (
  //             <RepositoryCard
  //               repo={repository}
  //               key={repository.full_name}
  //             />
  //           ))
  //         )}
  //       </div>
  //     </SimpleBar>
  //   </div>
  // )
}