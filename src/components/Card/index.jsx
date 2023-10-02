import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

import AppContext from '../../context';

function Card({
   id,
   title,
   price,
   imageUrl,
   onPlus,
   onFavorite,
   favorited = false,
   loading = false,
}) {
   const { isItemAdded } = React.useContext(AppContext);
   const [isLiked, setIsLiked] = useState(favorited);
   const obj = { id, parentId: id, title, price, imageUrl };

   const onClickPlus = () => {
      onPlus(obj);
   };

   const onAddLiked = () => {
      onFavorite(obj);
      setIsLiked(!isLiked);
   };

   return (
      <>
         <div className={styles.card}>
            {loading ? (
               <ContentLoader
                  speed={2}
                  width={170}
                  height={250}
                  viewBox="0 0 170 265"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb">
                  <rect x="0" y="0" rx="10" ry="10" width="170" height="155" />
                  <rect x="0" y="169" rx="8" ry="8" width="170" height="15" />
                  <rect x="0" y="191" rx="8" ry="8" width="100" height="15" />
                  <rect x="0" y="237" rx="8" ry="8" width="80" height="25" />
                  <rect x="135" y="231" rx="8" ry="8" width="35" height="35" />
               </ContentLoader>
            ) : (
               <>
                  {onFavorite && (
                     <div className={styles.favorite} onClick={onAddLiked}>
                        <img
                           width={32}
                           height={32}
                           src={isLiked ? '/img/heart-liked.png' : '/img/heart-unliked.png'}
                           alt="like"
                        />
                     </div>
                  )}
                  <img className="mb-15" width="100%" height={135} src={imageUrl} alt="Sneakers" />
                  <h5 className="card-text">{title}</h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price.toLocaleString()} руб</b>
                     </div>
                     {onPlus && (
                        <img
                           className={styles.plus}
                           onClick={onClickPlus}
                           src={isItemAdded(id) ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
                           alt="Plus"
                        />
                     )}
                  </div>
               </>
            )}
         </div>
      </>
   );
}

export default Card;
