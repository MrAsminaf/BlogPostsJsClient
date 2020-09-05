import React from 'react'
import { Link } from 'react-router-dom';

class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersHTML: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:6600/api/users")
        .then(results => results.json())
        .then(data => {
            this.setState({
                users: data
            });
            this.setState({
                usersHTML: this.state.users.map(user => 
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
                    {this.state.usersHTML}
                </tbody>
            </table>
        );
    }
}

export default UserListComponent;