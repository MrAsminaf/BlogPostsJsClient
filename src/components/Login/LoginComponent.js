import React, { useState } from 'react';

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const object = {
            "username": username,
            "password": password
        };
        console.log(JSON.stringify(object));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='usernameInput'>Username</label>
                <input name='username' type='text'
                value={username} onChange={handleInputChange}
                className='form-control' id='usernameInput'/>
            </div>
            <div className='form-group'>
                <label htmlFor='passwordInput'>Password</label>
                <input name='password' type='password'
                value={password} onChange={handleInputChange}
                className='form-control' id='passwordInput'/>
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>

    );
}

export default LoginComponent;