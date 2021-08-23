import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import SearchBar from './components/ui/SearchBar';
import CharacterGrid from './components/bbcharacters/CharacterGrid';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header></Header>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}


export default App;