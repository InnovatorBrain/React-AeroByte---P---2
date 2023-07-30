// Packages
import React from 'react';
// import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';
import './styles/style.css'

import starImage from './assets/CardsImages/star.png'



// COMPONENTS
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import Cards from './components/Crads';
import Data from './components/Data';



function App() {
  const cards = Data.map(item => {
    return <Cards
      // WE HAVE TO LINKS OF IMAGES IN DATA AND EACH AND EVERY THING LOADS AUTOMATICALLY FROM DATA
      // key={item.id}
      // {...item}
    image={item.coverImg}
    starImage={starImage}
    ratting={item.stats.rating}
    reviews={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    cardDescription={item.description}
    price={item.price + 50}
    openSpots = {item.openSpots}
    />
  })

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='' element={
              <>
                <Navbar />
                <ImageGrid />
                <div className="cards-container">

                  {cards}

                </div>
              </>
            } />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
