import SimpleBar from 'simplebar-react';
import "./List.css";

export default function UserList( {title, children} ) {
  return (
    <SimpleBar style={{ maxHeight: 500 }}>
      <div className="UserList" >
        <h3>{title}</h3>
        <ul className='UserList__content' >
          {children} 
        </ul>
      </div>
    </SimpleBar>
  )
}