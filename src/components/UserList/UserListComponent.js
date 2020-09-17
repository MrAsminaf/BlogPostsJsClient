import React from 'react'
import { Link } from 'react-router-dom';
import styles from './UserListComponent.module.css';

class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    handleError(response) {
        if (!response.ok) {
            console.log("Error occured");
        }
        return response;
    }

    componentDidMount() {
        var token = 'Bearer ' + sessionStorage.getItem('token');

        fetch("https://fastblog.herokuapp.com/api/users", {
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
            results.json().then((result) => {
                this.setState({            
                    users: result.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.secondName}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/details/${user.id}`}>
                                    <button className={styles.button}>Details</button>
                                </Link>
                                <Link to={`/edit/${user.id}`}>
                                    <button className={styles.button}>Edit</button>
                                </Link>
                                <button className={styles.button}>Delete</button>
                            </td>
                        </tr>
                    )
                });
            })
            .catch((error) => {
                console.log(error.message);
            })
        });
    }

    render() {
        return (
            <div className={styles.container}>
            <table className="table table-bordered p-3 mb-2 bg-dark text-white">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Second Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users}
                </tbody>
            </table>
            </div>
        );
    }
}

export default UserListComponent;