import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './ListItem.module.css';


export default class ListItem extends Component {


     
   renderItems  ()  {
        return [1, 2, 3].map ((item, index) => {

            return (
                <li key={index}>
                    <NavLink to={'/item/' + item}></NavLink>
                        Car {item}

                </li>
            )
        })
    }
    
    render() {
        return (
            <div className={styles.ListItem}>
                <div>
                <h1>Список товаров</h1>
                <ul>
                    {this.renderItems ()}
                </ul>
                </div>
                

            </div>
        )
    };
};