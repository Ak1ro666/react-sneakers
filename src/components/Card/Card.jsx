export default function Card() {
   return (
      <>
         <div className="card">
            <div className="favorite">
               <img width={32} height={32} src="/img/heart-unliked.png" alt="Unliked" />
            </div>
            <img
               className="mb-15"
               width={133}
               height={112}
               src="/img/sneakers/1.jpg"
               alt="Sneakers"
            />
            <h5 className="card-text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
               <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
               </div>
               <button className="button">
                  <img src="/img/plus.svg" alt="Plus" />
               </button>
            </div>
         </div>
      </>
   );
}
