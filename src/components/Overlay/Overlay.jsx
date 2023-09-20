export default function Overlay() {
   return (
      <>
         <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
               <div className="d-flex justify-between align-center mb-30">
                  <h2>Корзина</h2>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
               </div>

               <div className="items">
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className="cartItemImg"></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                     </div>
                     <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                  </div>
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className="cartItemImg"></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                     </div>
                     <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                  </div>
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className="cartItemImg"></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                     </div>
                     <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                  </div>
               </div>

               <div className="cartTotalBlock">
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
