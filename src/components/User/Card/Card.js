import {BsBuilding, BsGeoAlt} from 'react-icons/bs'

import "./Card.css";

export default function UserCard({ user, isSelected }) {
  return (
    <li className={`UserCard ${isSelected && 'UserCard--selected'}`}>
      <div className="Usercard__main-info">
        <h3>{user.name}</h3> <span> {user.login} </span>
      </div>
      <span className="UserCard__underline" > {user.bio} </span>
      
      <div className="UserCard__additional-info" >
        {Boolean(user.company) && (
          <span>  
           <BsBuilding /> {user.company} 
          </span>
        )}
        {Boolean(user.locatio) && (
          <span> 
            <BsGeoAlt /> {user.location} 
          </span>
        )}
      </div>
    </li>
  )
}