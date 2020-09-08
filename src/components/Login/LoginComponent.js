import React, { useState } from 'react';
import { Redirect } from 'react-router';

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);
    
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
        const url = 'http://localhost:6600/api/authenticate/login';

        const object = {
            "username": username,
            "password": password
        };
        console.log(JSON.stringify(object));

        const response = fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(object)
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error("Server doesn't respond");
            }

            response.json().then((result) => {
                console.log(result.token);
                sessionStorage.setItem("token", result.token);
                setShouldRedirect(true);
            })
        }).catch((error) => {
            console.log(error.message);
        })

        
        console.log(response);
    }

    return shouldRedirect ? <Redirect to='/'/> : (
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