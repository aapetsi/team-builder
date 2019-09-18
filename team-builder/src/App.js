import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [users, setUser] = useState([{id: 1,name: "Apetsi"}, {id:2, name:"John"}, {id:3, name: "Jane"}])

  console.log(users)
  return (
    <div className="App">
      <h1>app component</h1>
      {users.map(user => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
