import React, {Component} from 'react';
import styles from './Layout.module.css'


export default class Layout extends Component {
    render () {
        return (
            <div className={styles.Layout}>

                <main>
                    {this.props.children}
                </main>

            </div>
        )
    };
};