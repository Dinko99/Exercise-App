import { useState,useEffect } from 'react';
import './Search.scss'

const Search = () => {
    const [search,setSearch] = useState('')

    const handleSearch = async () => {
        if(search) {
            // const exercisesData = await fetchData();
        }
    }

  return (
    <div className="search-bar">
        <input type="text" name="search" 
        placeholder='Search for exercises, muscles and equipment'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
         />
        <button onClick={handleSearch}>Search</button>
    </div>
    
  )
}

export default Search