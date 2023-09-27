import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Overlay from './components/Overlay';
import Header from './components/Header';
import axios from 'axios';
import Favorites from './Pages/Favorites';

function App() {
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [favorites, setFavorites] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [cartOpened, setCartOpened] = useState(false);

   React.useEffect(() => {
      axios
         .get('https://650f5b2754d18aabfe9a09ba.mockapi.io/items')
         .then((res) => {
            setItems(res.data);
         })
         .catch((error) => {
            console.log('Error>>>', error);
         });

      axios
         .get('https://650f5b2754d18aabfe9a09ba.mockapi.io/Cart')
         .then((res) => {
            setCartItems(res.data);
         })
         .catch((error) => {
            console.log('Error>>>', error);
         });

      axios
         .get('https://6512b5bfb8c6ce52b3960d63.mockapi.io/favorites')
         .then((res) => {
            setFavorites(res.data);
         })
         .catch((error) => {
            console.log('Error>>>', error);
         });
   }, []);

   const onAddToCart = async (obj) => {
      if (cartItems.find((item) => item.id === obj.id)) {
         setCartItems.filter((item) => item.id !== obj.id);
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
      setCartItems((prev) => prev.filter((item) => item.id !== id));

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
   cartOpened
      ? body.classList.add('overlay-open')
      : (body.classList.remove('overlay-open'), body.classList.add('overlay-close'));

   return (
      <Router>
         <div className="wrapper clear">
            {cartOpened && (
               <Overlay
                  items={cartItems}
                  closeCart={() => setCartOpened(false)}
                  onRemove={onRemove}
               />
            )}

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
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onAddToCart={onAddToCart}
                        changeInputValue={changeInputValue}
                        onAddToFavorite={onAddToFavorite}
                     />
                  }
               />
               <Route
                  path="/favorites"
                  element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
               />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
