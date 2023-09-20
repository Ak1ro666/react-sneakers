import Card from './components/Card/Card';
import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';

function App() {
   return (
      <div>
         <div className="wrapper clear">
            <Overlay />
            <Header />
            <div className="content p-40">
               <div className="d-flex justify-between mb-40 align-center">
                  <h1>Все кроссовки</h1>
                  <div className="search-block d-flex align-center">
                     <img src="/img/search.svg" alt="Search" />
                     <input type="text" placeholder="Поиск..." />
                  </div>
               </div>
               <div className="sneakers d-flex flex-wrap">
                  <Card />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
