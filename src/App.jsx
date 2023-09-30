import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Overlay from './components/Overlay';
import Header from './components/Header';
import axios from 'axios';
import Favorites from './Pages/Favorites';

import AppContext from './context';

const App = () => {
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [favorites, setFavorites] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [cartOpened, setCartOpened] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   React.useEffect(() => {
      async function fetchData() {
         setIsLoading(true);
         const responseCart = await axios.get('https://650f5b2754d18aabfe9a09ba.mockapi.io/Cart');
         const favoritesCart = await axios.get(
            'https://6512b5bfb8c6ce52b3960d63.mockapi.io/favorites',
         );
         const responseItems = await axios.get('https://650f5b2754d18aabfe9a09ba.mockapi.io/items');

         setIsLoading(false);

         setFavorites(favoritesCart.data);
         setCartItems(responseCart.data);
         setItems(responseItems.data);
      }
      fetchData();
   }, []);

   const onAddToCart = async (obj) => {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
         cartItems.filter((item) => Number(item.id) !== Number(obj.id));
      } else {
         try {
            axios.post('https://650f5b2754d18aabfe9a09ba.mockapi.io/Cart', obj);
            setCartItems((prev) => [...prev, obj]);
         } catch (error) {
            console.log(`error >>> ${error}`);
         }
      }
   };

   const onRemove = (id) => {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));

      axios
         .delete(`https://650f5b2754d18aabfe9a09ba.mockapi.io/Cart/${id}`)
         .then((response) => {
            console.log('Success');
         })
         .catch((error) => {
            console.error('Error>>>', error);
         });
   };

   const onAddToFavorite = async (obj) => {
      try {
         if (favorites.find((favObj) => favObj.id === obj.id)) {
            axios.delete(`https://6512b5bfb8c6ce52b3960d63.mockapi.io/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
         } else {
            const { data } = await axios.post(
               'https://6512b5bfb8c6ce52b3960d63.mockapi.io/favorites',
               obj,
            );
            setFavorites((prev) => [...prev, data]);
         }
      } catch (error) {
         alert('Не удалось добавить в фавориты');
      }
   };

   const changeInputValue = (e) => {
      setSearchValue(e.target.value);
   };

   const body = document.querySelector('body');
   cartOpened ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');

   const isItemAdded = (id) => {
      return cartItems.some((obj) => Number(obj.id) === Number(id));
   };

   return (
      <AppContext.Provider
         value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            onAddToFavorite,
            setCartOpened,
            setCartItems,
         }}>
         <Router>
            <div className="wrapper clear">
               {cartOpened && <Overlay items={cartItems} onRemove={onRemove} />}

               <Header
                  cartOpen={() => {
                     setCartOpened(true);
                     window.scrollTo(0, 0);
                  }}
               />

               <Routes>
                  <Route
                     path="/"
                     element={
                        <Home
                           cartItems={cartItems}
                           items={items}
                           searchValue={searchValue}
                           setSearchValue={setSearchValue}
                           onAddToCart={onAddToCart}
                           changeInputValue={changeInputValue}
                           onAddToFavorite={onAddToFavorite}
                           isLoading={isLoading}
                        />
                     }
                  />
                  <Route path="/favorites" element={<Favorites />} />
               </Routes>
            </div>
         </Router>
      </AppContext.Provider>
   );
};

export default App;
