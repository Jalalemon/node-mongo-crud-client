import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete = (user) => {
        const agree = window.confirm(`are sure you want to delete ${user.name}`)
        console.log('deleting user', user._id);
        if(agree){
            console.log('deleting Id', user._id);
           fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
           })
            .then(res => res.json())
            .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully')
                console.log('user deleted', user._id);
                
                const remainingUser = displayUsers.filter(usr => usr._id !== user._id);
                setDisplayUsers(remainingUser);
            }
           
        })
        }

    }
    return (
        <div>
            <h3>hoome users {displayUsers.length}</h3>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}> name: {user.name}, email: {user.email} <Link to={`/update/${user._id}`}> <button>
                        update user
                    </button>
                    </Link> <button onClick={() =>handleDelete(user)}> X</button></p> )
                }
            </div>
        </div>
    );
};

export default Home;