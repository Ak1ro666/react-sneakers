import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({ id, title, price, imageUrl, onPlus, onFavorite, favorited = false }) {
   const [isAdded, setIsAdded] = useState(false);
   const [isLiked, setIsLiked] = useState(favorited);

   const onClickPlus = () => {
      onPlus({ title, price, imageUrl });
      setIsAdded(!isAdded);
   };

   const onAddLiked = () => {
      onFavorite({ id, title, price, imageUrl });
      setIsLiked(!isLiked);
   };

   return (
      <>
         <div className={styles.card}>
            <div className={styles.favorite} onClick={onAddLiked}>
               <img
                  width={32}
                  height={32}
                  src={isLiked ? '/img/heart-liked.png' : '/img/heart-unliked.png'}
                  alt="like"
               />
            </div>
            <img className="mb-15" width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5 className="card-text">{title}</h5>
            <div className="d-flex justify-between align-center">
               <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{price.toLocaleString()} руб</b>
               </div>
               <img
                  className={styles.plus}
                  onClick={onClickPlus}
                  src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
                  alt="Plus"
               />
            </div>
         </div>
      </>
   );
}

export default Card;
