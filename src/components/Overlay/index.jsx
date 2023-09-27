import styles from './Overlay.module.scss';

function Overlay({ closeCart, items = [], onRemove }) {
   return (
      <>
         <div className={styles.overlay}>
            <div className={styles.drawer}>
               <div className="d-flex justify-between align-center mb-30">
                  <h2>Корзина</h2>
                  <img
                     onClick={closeCart}
                     className="removeBtn"
                     src="/img/btn-remove.svg"
                     alt="Remove"
                  />
               </div>

               {items.length > 0 ? (
                  <div>
                     <div className={styles.items}>
                        {items.map((item, index) => (
                           <div key={index} className={styles.cartItem}>
                              <div
                                 style={{ backgroundImage: `url(${item.imageUrl})` }}
                                 className={styles.cartItemImg}></div>
                              <div className="mr-20 flex">
                                 <p className="mb-5">{item.title}</p>
                                 <b>{item.price.toLocaleString()} руб.</b>
                              </div>
                              <img
                                 onClick={() => onRemove(item.id)}
                                 className="removeBtn"
                                 src="/img/btn-remove.svg"
                                 alt="Remove"
                              />
                           </div>
                        ))}
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
               ) : (
                  <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                     <img
                        className="mb-20"
                        width={120}
                        height={120}
                        src="/img/empty-cart.jpg"
                        alt="cart empty"
                     />
                     <p className="opacity-6">
                        Добавьте хотябы одну пару кроссовок, чтобы сделать заказ.
                     </p>
                     <button onClick={closeCart} className="greenButton">
                        <img src="/img/arrowRight.svg" alt="Arrow" />
                        Вернуться назад
                     </button>
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

export default Overlay;
