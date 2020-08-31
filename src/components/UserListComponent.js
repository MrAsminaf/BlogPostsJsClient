import React from 'react'

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
                    <div key={user.id}>
                        {user.id} {user.name} {user.secondName} {user.age}
                    </div>
        )});
        })
    }

    render() {
        return (
            <div>
                {this.state.usersHTML}
            </div>
        );
    }
}

export default UserListComponent;