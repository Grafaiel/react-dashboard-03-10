import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({ repositoryOwner, isSelected, onClick }) {
  return (
    <li 
      onClick={ onClick }
      className={`RepositoryCard ${isSelected && 'RepositoryCard--selected'}`}
    > 
      <h3>{repositoryOwner.name}</h3>
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repositoryOwner.stargazerCount || 0}
        </span>
        <span>
          <GoRepoForked /> {repositoryOwner.forkCount || 0}
        </span>
        {repositoryOwner.primaryLanguage && <span>{repositoryOwner.primaryLanguage.name}</span>}
      </div>
    </li >
  );
}
