import React, { Component } from 'react';
import Logo from '../../assets/img/logo.png'
import './style.css';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                email: '',
                password: ''
            }
        }

        this.submit = this.submit.bind(this);
        this.setDataForm = this.setDataForm.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    submit() {
    }

    setDataForm(event) {
        let loginForm = this.state.loginForm;
        loginForm[event.target.name] = event.target.value;
        this.setState({
            loginForm: loginForm
        })
    }

    resetInput() {
        let loginForm = this.state.loginForm;
        loginForm.password = '';
        loginForm.email = '';
        this.setState({
            loginForm: loginForm
        })
    }

    refreshPage() {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-login">
                        <div className="content-form-login">
                            <img className="logo" src={Logo} alt="logo"></img>
                            <form>
                                <input onChange={this.setDataForm} className="input input-email" type="text" name="email" placeholder="E-mail" />
                                <input onChange={this.setDataForm} className="input input-password" type="password" name="password" placeholder="Senha" />
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