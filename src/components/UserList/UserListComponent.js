import React from 'react'
import { Link } from 'react-router-dom';

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
        fetch("http://localhost:6600/api/users")
        .then((results) => {
            if (results.status !== 200) {
                throw new Error("Server doesn't respond");
            }
            results.json();
        })
        .then(data => {
            this.setState({
                usersHTML: data.map(user => 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.secondName}</td>
                        <td>{user.age}</td>
                        <td>
                            <button>
                                <Link to='/:id'>Details</Link>
                            </button>
                        </td>
                    </tr>
                )
            });
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    render() {
        return (
            <table className="table table-bordered">
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
        );
    }
}

export default UserListComponent;