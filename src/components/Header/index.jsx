import styles from './Header.module.scss';

function Header() {
   return (
      <>
         <header className={styles.header}>
            <div className={styles.headerLeft}>
               <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="Logo" />
               <div>
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовок</p>
               </div>
            </div>
            <ul className="d-flex align-center">
               <li className="mr-30 cu-p">
                  <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Cart" />
                  <span>1205 руб.</span>
               </li>
               <li className="mr-30">
                  <img className="cu-p" width={18} height={18} src="/img/heart.svg" alt="Heart" />
               </li>
               <li>
                  <img className="cu-p" width={18} height={18} src="/img/user.svg" alt="User" />
               </li>
            </ul>
         </header>
      </>
   );
}

export default Header;
