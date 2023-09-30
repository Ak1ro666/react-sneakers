import React from 'react';
import styles from './Overlay.module.scss';
import Info from '../Info';
import axios from 'axios';

import AppContext from '../../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Overlay = ({ items = [], onRemove }) => {
   const { cartItems, setCartOpened, setCartItems } = React.useContext(AppContext);

   const [orderId, setOrderId] = React.useState(null);
   const [isOrderComplete, setIsOrderComplete] = React.useState(false);
   const [isLoading, setIsLoading] = React.useState(false);

   const onClickOrder = async () => {
      try {
         setIsLoading(true);
         const { data } = await axios.post('https://6512b5bfb8c6ce52b3960d63.mockapi.io/orders/', {
            items: cartItems,
         });
         setOrderId(data.id);
         setIsOrderComplete(true);
         setCartItems([]);

         for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            axios.delete(`https://650f5b2754d18aabfe9a09ba.mockapi.io/Cart/${item.id}`);
            await delay(1000);
         }
      } catch (error) {
         console.log(`Error >>> ${error}`);
         alert('Не удалось создать заказ :(');
      }
      setIsLoading(false);
   };

   return (
      <>
         <div className={styles.overlay}>
            <div className={styles.drawer}>
               <div className="d-flex justify-between align-center mb-30">
                  <h2>Корзина</h2>
                  <img
                     onClick={() => setCartOpened(false)}
                     className="removeBtn"
                     src="/img/btn-remove.svg"
                     alt="Remove"
                  />
               </div>

               {items.length > 0 ? (
                  <div className="d-flex flex-column flex">
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
                        <button
                           className={isLoading ? 'button-disabled' : 'button-enabled'}
                           disabled={isLoading}
                           onClick={onClickOrder}>
                           Оформить заказ
                        </button>
                     </div>
                  </div>
               ) : (
                  <Info
                     title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
                     description={
                        isOrderComplete
                           ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке.`
                           : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                     }
                     image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
                  />
               )}
            </div>
         </div>
      </>
   );
};

export default Overlay;
