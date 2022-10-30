import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
const loadingName = useLoaderData()

const [user, setUser] = useState(loadingName);

const handleAddUser = (event) => {
  event.preventDefault();
  fetch(`http://localhost:5000/users/${loadingName._id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
      if(data.modifiedCount > 0){
          alert('user updated')
          console.log(data)
         
    }
   

})
  
};
const inputHandleChange = (event) => {
  const value = event.target.value;
  const field = event.target.name;

  const newUser = { ...user };
  newUser[field] = value;
  setUser(newUser);
};
    return (
      <div>
        <h2>update user {loadingName.name} </h2>
        <div>
          <form onSubmit={handleAddUser}>
            <input
              onChange={inputHandleChange}
              defaultValue={loadingName.name}
              type="text"
              name="name"
              placeholder="name"
              required
            />
            <br />
            <input
              onChange={inputHandleChange}
              defaultValue={loadingName.address}
              type="text"
              name="address"
              placeholder="address"
              required
            />
            <br />

            <input
              onChange={inputHandleChange}
              defaultValue={loadingName.email}
              type="email"
              name="email"
              id=""
              placeholder="email"
              required
            />
            <button type="submit"> Update user</button>
          </form>
        </div>
      </div>
    );
};

export default Update;