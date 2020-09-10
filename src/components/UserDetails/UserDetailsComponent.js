import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function UserDetailsComponent(props) {
    const {userId} = useParams();
    const [user, setUser] = useState(1);

    useEffect(() => {
        GetUserData();
    }, []);

    function GetUserData() {
        var token = 'Bearer ' + sessionStorage.getItem('token');

        fetch(`http://localhost:6600/api/users/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((results) => {
            if (results.status !== 200) {
                throw new Error("Server doesn't respond");
            }
            return results.json()
        })
        .then((result) => {
            setUser(user + 1);
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <div>
            
        </div>
    );
}

export default UserDetailsComponent;