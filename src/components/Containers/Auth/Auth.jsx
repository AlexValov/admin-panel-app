import React, { Component } from 'react';
import styles from './Auth.module.css';
import Input from '../../Input/Input';
import is from 'is_js';

export default class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный емайл',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };


    loginHandler = () => {

    };

    submitHandler = event => {
        event.preventDefault()
    }


    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }


        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }




        return isValid

    }

    onChangeHandler = (event, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })
        this.setState({
            formControls, isFormValid
        })
    }


    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })

    }

    render() {
        return (
            <div className={styles.Auth}>
                <div >
                    <h1>Вход</h1>
                    <form className={styles.AuthForm} onSubmit={this.submitHandler}>
                        {this.renderInputs()}

                        <button
                            type='success'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                            >
                                Войти
                        </button>

                    </form>
                    <a href='/'> Зарегистрироваться</a>
                </div>


            </div>
        )
    };
};