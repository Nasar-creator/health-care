import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

import Navb from './components/Navi';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('http://localhost:5000/api/cards')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
       <Navb />
      <SearchBar setSearchTerm={setSearchTerm}  />
      <CardList cards={filteredCards} />
      <Footer />
      
    </div>
  );
}

export default App;
