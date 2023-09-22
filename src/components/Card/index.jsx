import styles from './Card.module.scss';

function Card({ title, price, imageUrl, onClickBtn }) {
   return (
      <>
         <div className={styles.card}>
            <div className="favorite">
               <img width={32} height={32} src="/img/heart-unliked.png" alt="Unliked" />
            </div>
            <img className="mb-15" width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5 className="card-text">{title}</h5>
            <div className="d-flex justify-between align-center">
               <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{price.toLocaleString()} руб</b>
               </div>
               <button className="button" onClick={onClickBtn}>
                  <img src="/img/plus.svg" alt="Plus" />
               </button>
            </div>
         </div>
      </>
   );
}

export default Card;
