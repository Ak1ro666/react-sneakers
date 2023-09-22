import styles from './Overlay.module.scss';

function Overlay() {
   return (
      <>
         <div className={styles.overlay} style={{ display: 'none' }}>
            <div className={styles.drawer}>
               <div className="d-flex justify-between align-center mb-30">
                  <h2>Корзина</h2>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
               </div>

               <div className={styles.items}>
                  <div className={styles.cartItem}>
                     <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className={styles.cartItemImg}></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                     </div>
                     <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                  </div>
                  <div className={styles.cartItem}>
                     <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className={styles.cartItemImg}></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                     </div>
                     <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                  </div>
                  <div className={styles.cartItem}>
                     <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className={styles.cartItemImg}></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                     </div>
                     <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                  </div>
               </div>

               <div className={styles.cartTotalBlock}>
                  <ul className="mb-40">
                     <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                     </li>
                     <li>
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 руб. </b>
                     </li>
                  </ul>
                  <button>Оформить заказ</button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Overlay;
