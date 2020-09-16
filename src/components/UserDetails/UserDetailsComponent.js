import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function UserDetailsComponent(props) {
    const {userId} = useParams();
    const [user, setUser] = useState({
        "id": 0,
        "name": "",
        "secondName": ""
    });

    useEffect(() => {
	    var token = 'Bearer ' + sessionStorage.getItem('token');

        fetch(`https://fastblog.herokuapp.com/api/users/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Server does not respond");
            }

            return res.json()}
        )
        .then((result) => {
            setUser(result);
        })
        .catch(() => {
            console.log("Server does not respond");
        })
        
    }, []);

    return (
        <div>
            {user.id} {user.name} {user.secondName}
        </div>
    );
}

export default UserDetailsComponent;