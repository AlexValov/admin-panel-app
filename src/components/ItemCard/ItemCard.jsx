import React from 'react';
import styles from './ItemCard.module.css';

export default class ItemCard extends React.Component {
    state = {
        cars: []
    }
    
    render() {
        return (
            <div className={styles.ItemCard}>
                 <h1>карточка товара</h1>
                 <div className={styles.itemWrapper}>

                 </div>
            </div>
        );
    };

    }
