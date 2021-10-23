import {GoStar, GoRepoForked} from 'react-icons/go';
import './Card.css';

export default function RepositoryCard ({ repositories }) {

  return (
    <li className="RepositoryCard">
      <h3>{repositories.name}</h3>
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar/> {repositories.stargazers_count || 0}
        </span>
        <span>
          <GoRepoForked/> {repositories.forks_count || 0}
        </span>
        {repositories.language && <span> {repositories.language} </span>}
      </div>
    </li>
  )
}