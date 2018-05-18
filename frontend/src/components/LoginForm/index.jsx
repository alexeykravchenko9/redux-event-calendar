import React, { Component } from 'react';
import Styles from './styles.scss';

import config from '../../../../config/config';


export default class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            message:"",
            messageArea: "Text area text"
        };

        this.handleUserForm = ::this._handleUserForm;
        this.handleInputChange = ::this._handleInputChange;

    }

    _handleInputChange(e){

        if (e.target.id === 'username'){
            this.setState({ username: e.target.value });
        } else if (e.target.id === 'password'){
            this.setState({ password: e.target.value });
        }

    }


    _handleUserForm(e) {
        e.preventDefault();

        fetch(`http://${config.api.path}:${config.api.port}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((res) => {

            res.json().then(data => {

                console.log(data);

                const statusToState = (data) => {
                    return this.setState({message: data.meta.message});
                };

                if (res.status === 200) {
                    statusToState(data);
                } else if (res.status === 201) {
                    statusToState(data);
                } else if (res.status === 403) {
                    statusToState(data);
                }

            });

        });
    }


    render(){
        return (
            <div className={ Styles.recCompForm }>
                <h3>Sign Up/Login</h3>
                <p>{ this.state.message }</p>
                <form action="#" onSubmit={ this.handleUserForm }>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="text" id='username' onChange={ this.handleInputChange } value = { this.state.username } placeholder={ 'Title' }/>
                    </div>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="password" id='password' onChange={ this.handleInputChange } value = { this.state.password } placeholder={ 'Password' }/>
                    </div>

                    <div className={ Styles.recCompFormField }>
                        <input type="submit" value={'Submit'} />
                    </div>


                </form>
            </div>
        )
    }
}