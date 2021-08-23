import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';
import Header from './components/ui/Header';
import SearchBar from './components/ui/SearchBar';
import CharacterGrid from './components/bbcharacters/CharacterGrid';
import Pagination from './components/Pagination';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [curPage, setCurPage] = useState(1)
  const [cardsPerPage] = useState(10)
  

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

//Get current cards
const indexOfLastCard = curPage * cardsPerPage
const indexOfFirstCard = indexOfLastCard - cardsPerPage
const curCards = items.slice(indexOfFirstCard, indexOfLastCard)

//Change page
const paginate = (pageNo) => setCurPage(pageNo)


  return (
    <div className="container">
      <Header></Header>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={curCards} />
      <Pagination cardsPerPage={cardsPerPage} totalCards={items.length} paginate={paginate} />
    </div>
  );
}


export default App;
