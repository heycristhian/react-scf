import React, { Component } from 'react';
import Logo from '../../assets/img/logo.png'
import './style.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    submit() {
        console.log('submit');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-login">
                        <div className="content-form-login">
                            <img className="logo" src={Logo} alt="logo"></img>
                            <form>
                                <input className="input input-email" type="text" name="email" placeholder="Email" />
                                <input className="input input-password" type="text" name="password" placeholder="Password" />
                                <div onClick={this.submit} className="gradient-button">Acessar</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Login }