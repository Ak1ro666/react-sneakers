import React from 'react';
import Card from '../components/Card';

const Home = ({
   items,
   searchValue,
   setSearchValue,
   onAddToCart,
   onAddToFavorite,
   changeInputValue,
}) => {
   const clearInputValue = () => {
      setSearchValue('');
   };
   return (
      <div className="p-40">
         <div className="d-flex justify-between mb-40 align-center">
            <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
            <div className="search-block d-flex align-center">
               <img src="/img/search.svg" alt="Search" />
               <input
                  type="text"
                  placeholder="Поиск..."
                  onChange={changeInputValue}
                  value={searchValue}
               />
               {searchValue && (
                  <img
                     onClick={clearInputValue}
                     width={18}
                     height={18}
                     className="clear"
                     src="/img/btn-remove.svg"
                     alt="Clear"></img>
               )}
            </div>
         </div>
         <div className="sneakers d-flex flex-wrap">
            {items
               .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
               .map((item, index) => (
                  <Card
                     key={index}
                     onPlus={(obj) => onAddToCart(obj)}
                     onFavorite={(obj) => onAddToFavorite(obj)}
                     {...item}
                  />
               ))}
         </div>
      </div>
   );
};

export default Home;
