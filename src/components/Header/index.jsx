import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Header({ cartOpen }) {
   const { totalPrice } = useCart();
   return (
      <>
         <header className={styles.header}>
            <Link to="/">
               <div className={styles.headerLeft}>
                  <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="Logo" />
                  <div>
                     <h3 className="text-uppercase">React Sneakers</h3>
                     <p className="opacity-5">Магазин лучших кроссовок</p>
                  </div>
               </div>
            </Link>
            <ul className="d-flex align-center">
               <li className="mr-30 cu-p" onClick={cartOpen}>
                  <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Cart" />
                  <span>{totalPrice.toLocaleString()} руб.</span>
               </li>
               <li className="mr-20 cu-p">
                  <Link className="d-flex" to="/favorites">
                     <img
                        className="cu-p"
                        width={18}
                        height={18}
                        src="/img/heart.svg"
                        alt="Heart"
                     />
                  </Link>
               </li>
               <li>
                  <Link className="d-flex" to={'/orders'}>
                     <img className="cu-p" width={18} height={18} src="/img/user.svg" alt="User" />
                  </Link>
               </li>
            </ul>
         </header>
      </>
   );
}

export default Header;
