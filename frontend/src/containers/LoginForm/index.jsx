import React, { Component } from 'react';
import Styles from './styles.scss';

import { API_LOGIN_URL } from './../../constants/api';


export default class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            message:"",
            messageArea: "Text area text",
            style: ""
        };

        this.handleUserForm = this._handleUserForm.bind(this);
        this.handleInputChange = this._handleInputChange.bind(this);

    }

    _handleInputChange(e){
        const { id, value } = e.target;

        if (id === 'username'){
            this.setState({ username: value });
        } else if (id === 'password'){
            this.setState({ password: value });
        }
    }


    _handleUserForm(e) {
        e.preventDefault();
        const { username, password } = this.state;



        fetch(API_LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => {


            res.json().then(data => {


                const statusToState = (data) => {

                    this.setState({
                        message: data.meta.message,
                        style: (data.meta.code === 403) ? Styles.recFail : Styles.recSuccess
                    }, () => {
                        setTimeout( () => {
                            (data.meta.code !== 403 ) ? this.setState({ message: "", username: "", password: "" }) : '';
                        }, 2000);

                    });

                };

                statusToState(data);

            });

        });
    }


    render(){
        const { style, message, username, password } = this.state;

        return (
            <div className={ Styles.recCompForm }>
                <h3>Sign Up/Login</h3>
                <p>You should be logged for using Event App </p>
                <p className={ style }>{ message }</p>
                <form action="#" onSubmit={ this.handleUserForm }>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="text"
                               id='username'
                               onChange={ this.handleInputChange }
                               value = { username }
                               placeholder={ 'Username' }
                               required={'required'}/>
                    </div>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="password"
                               id='password'
                               onChange={ this.handleInputChange }
                               value = { password }
                               placeholder={ 'Password' }
                               required={'required'}/>
                    </div>

                    <div className={ Styles.recCompFormField }>
                        <input type="submit" value={'Submit'} />
                    </div>


                </form>
            </div>
        )
    }
}