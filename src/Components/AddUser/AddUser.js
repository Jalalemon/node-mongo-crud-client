import React, { useState } from 'react';

const AddUser = () => {
const [user, setUser] =useState({name: 'default', email: 'd@gmail.com'});

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(user);
        fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.acknowledged){
                alert('user succesfully added') 
                event.target.reset();

            }
        })

    }
    const inputhandleBlur = event => {
        const value = event.target.value;
        const field = event.target.name;

        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
         

    }
    return (
        <div>
            <h2>add user</h2>
            <div>
                <form onSubmit={handleAddUser}>
                    <input onBlur={inputhandleBlur} type="text" name='name' placeholder='name' required />
                    <br />
                    <input onBlur={inputhandleBlur} type="text" name='address' placeholder='address' required />
                    <br />
                   
                    <input onBlur={inputhandleBlur} type="email" name="email" id="" placeholder='email' required/>
                    <button type="submit"> add user</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;