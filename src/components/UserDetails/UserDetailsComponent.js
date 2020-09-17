import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from  './UserDetailsComponent.module.css';

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
        <div className={styles.container}>
            <div className='card text-white bg-dark mb-3'>
                <div className='card-header'>
                    ID: {user.id}
                </div>
                <div className='card-body'>
                    Name: {user.name}
                    <br></br>
                    Second name: {user.secondName}
                </div>
            </div>
        </div>
    );
}

export default UserDetailsComponent;