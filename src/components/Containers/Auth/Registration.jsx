import React, { Component } from 'react';
import styles from './Registration.module.css';

export default class Registration extends Component {

   
    registHandler = () => {

    };

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={styles.Registration}>
                <div>
                    <h1>Зарегистироваться</h1>
                    <form onSubmit={this.submitHandler}>
                        <input type='text'/>
                        <input tupe='text'/>
                        <input type='text'/>
                        <input tupe='text'/>
                        <input type='text'/>

                        <button onClick={this.registHandler}>Зарегистрироваться</button>
                        <a href='/'>Вернуться</a>
                    </form>
                </div>


            </div>
        )
    };
};