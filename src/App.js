// Packages
import React from 'react';
// import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';
import './styles/style.css'

// Images
// import image1 from './assets/CardsImages/img2.jpg'
// import image1 from './assets/CardsImages/img2.jpg'
// import image1 from './assets/CardsImages/img2.jpg'



// COMPONENTS
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import Cards from './components/Crads';
import Data from './components/Data';



function App() {
  const cards = Data.map(item => {
    return <Cards
      image={item.coverImg}
      starImage='../assets/CardsImages/star.png'
      ratting={item.stats.rating}
      reviews={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      cardDescription={item.description}
      price={item.price + 50}
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
