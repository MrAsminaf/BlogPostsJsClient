import React from 'react';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {        
        event.preventDefault();
        console.log("Username: " + this.state.username);
        console.log("Email" + this.state.email);
        console.log("Password: " + this.state.password);

        const object = {
            "Username": this.state.username,
            "Email": this.state.email,
            "Password": this.state.password
        }
        console.log(JSON.stringify(object));
        //this.sendData(object);
    }

    sendData(object) {
        const url = 'http://localhost:6600/api/authentication/register';

        const response = fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-chache',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(object)
        });
        console.log(response.JSON());
        return response.JSON();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='usernameInput'>Username</label>
                    <input name='username' type='text' 
                    value={this.state.username} onChange={this.handleInputChange} 
                    className='form-control' id='usernameInput'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='emailInput'>Email</label>
                    <input name='email' type='email'
                    value={this.state.email} onChange={this.handleInputChange}
                    className='form-control' id='emailInput'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='passwordInput'>Password</label>
                    <input name='password' type='password' 
                    value={this.state.password} onChange={this.handleInputChange} 
                    className='form-control' id='passwordInput'/>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default RegisterComponent;