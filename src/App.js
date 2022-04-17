import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [users,setUsers]=useState([])
  const nameRef=useRef();

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  const handleAddUser=(e)=>{
    const name=nameRef.current.value
const user={name}
// send to data server
fetch('http://localhost:5000/users',{
  method:"post",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  const addedUser=data;
  const newUsers=[...users,addedUser]
  setUsers(newUsers)
})

e.preventDefault()
  }


  return (
    <div className="App">
 <h1>user got</h1>{
  users.length
}
<form onSubmit={handleAddUser}>
  <input type="text" ref={nameRef} placeholder='enter name' />
  <input type="submit" value="Submit" />
</form>
<ul>
  {users.map(user=><li>{user.name}</li>)}
</ul>
    </div>
  );
}

export default App;
 