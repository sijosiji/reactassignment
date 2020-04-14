import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    userName: string,
    password: string,
    login: boolean
}

export default class LoginFirst extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string | number ) {
        super( props );
        this.state = {
            userName: "John",
            password: "Smith",
            login: false
        }
    }

    togglelogin = () => {
        let userNameString: string,
        passwordString: string

    const userName: HTMLInputElement | null = document.querySelector( '[name="user-name"]' );
    const password: HTMLInputElement | null = document.querySelector( '[name="password"]' );

    if ( userName === null )
        userNameString = '';
    else
        userNameString = userName.value;

    if ( password === null )
        passwordString = '';
    else
        passwordString = password.value;

        this.setState( {
            
            userName: this.state.userName,
            password: this.state.password,

            login: !this.state.login // Switch boolean to the opposite (!)
        } );
    }
    login = () => {
        return (
            <div>
                <h2>Welcome {this.state.userName}</h2>
                <form>
                <button onClick={this.togglelogin}>
                    LOGOUT
                </button>
                </form>
            </div>
        );
    }
    unlogin = () => {
        return (
            
            <div>
                <form>
                <fieldset>
                <legend>
                    <h3>Login Information</h3>
                    </legend>
                    <label htmlFor="user-name">User Name:</label>
                    <input type="text" name="user-name" /><br></br>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" /><br></br>
                    <button onClick={this.togglelogin}>
                    LOGIN
                </button>
                </fieldset>
                </form>
               
            </div>
            
        );
    }
    render () {
        if ( this.state.login )
            return this.login();
        else
            return this.unlogin();
    }
}