import SimpleBar from 'simplebar-react';
import "./List.css";

export default function UserList({ title, children, loading, onClick}) {
  return (
    <div className="UserList" >
      <h3>
        {title}
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <ul className='UserList__content' onClick={onClick} >
          {children}
        </ul>
      </SimpleBar>
    </div>
  )
}