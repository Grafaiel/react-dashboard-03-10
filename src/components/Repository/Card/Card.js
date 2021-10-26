import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({ repo }) {
  return (
    <li className="RepositoryCard">
      <h3>{repo.name}</h3>
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repo.stargazerCount || 0}
        </span>
        <span>
          <GoRepoForked /> {repo.forkCount || 0}
        </span>
        {/* {repo.primaryLanguage && <span>{repo.primaryLanguage}</span>} */}
      </div>
    </li >
  );
}
