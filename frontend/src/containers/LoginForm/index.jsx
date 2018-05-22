import React, { Component } from 'react';
import Styles from './styles.scss';

export default class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            message:"",
            messageArea: "Text area text",
            style: "",
            validation: ""
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

        if( !username || !password ) {

            this.setState({
                validation: "Please, fill all fields"
            });

        } else {
            this.setState({
                validation: ""
            });

            this.props.setLogin(username, password);


            // .then(data => {
            //         console.log(data, 'data');
            //
            //
            //         const statusToState = (data) => {
            //
            //             this.setState({
            //                 message: data.meta.message,
            //                 style: (data.meta.code === 403) ? Styles.recFail : Styles.recSuccess
            //             }, () => {
            //                 setTimeout( () => {
            //                     (data.meta.code !== 403 ) ? this.setState({ message: "", username: "", password: "" }) : '';
            //                 }, 2000);
            //
            //             });
            //
            //         };
            //
            //         statusToState(data);
            //
            //         (data.meta.code === 403) ? statusToState(data) : '';
            //
            //
            //
            //     });

        } // Check validation
    }

    componentWillReceiveProps(nextProps){
        (nextProps.error) ? this.setState({ message: nextProps.error, style: Styles.recFail })
            : this.setState({ message: "", username: "", password: "" });

    }


    render(){
        const { style, message, username, password, validation } = this.state;

        return (
            <div className={ Styles.recCompForm }>
                <h3>Sign Up/Login</h3>
                <p>You should be logged for using Event App </p>
                <p style={ {color: 'red', margin: 0 } }>{ validation && validation}</p>

                <p className={ style }>{ message }</p>
                <form action="#" onSubmit={ this.handleUserForm }>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="text"
                               id='username'
                               onChange={ this.handleInputChange }
                               value = { username }
                               placeholder={ 'Username' }
                               />
                    </div>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="password"
                               id='password'
                               onChange={ this.handleInputChange }
                               value = { password }
                               placeholder={ 'Password' }
                               />
                    </div>

                    <div className={ Styles.recCompFormField }>
                        <input type="submit" value={'Submit'} />
                    </div>


                </form>
            </div>
        )
    }
}