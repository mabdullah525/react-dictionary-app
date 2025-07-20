import React, { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState();

  const handleInput = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value);

  }

  const myFun = async () => {
    const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    const jsonData = await get.json();
    console.log(get);

  }
  return (
    <div className='app'>
      <h1 className='heading'>Dictionary App</h1>
      <div className='container'>
        <div className='search-bar'>
          <input type='text' placeholder='Search for a word...' onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <div className='results'></div>

      </div>
    </div>
  )
}

export default App