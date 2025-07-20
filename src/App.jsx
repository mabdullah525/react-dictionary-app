import React, { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState();

  const handleInput = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value);

  }

  const myFun = async () => {
    const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    const jsonData = await get.json();
    setData(jsonData[0]);

  }
  return (
    <div className='app'>
      <h1 className='heading'>Dictionary App</h1>
      <div className='container'>
        <div className='search-bar'>
          <input type='text' placeholder='Search for a word...' onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <div className='results'>
          {data && (
            <div className='word-details'>
              <h2 className='word-title'>Word: <span>{data.word}</span></h2>
              <p><strong>Part of Speech:</strong> {data.meanings[0].partOfSpeech}</p>
              <p><strong>Definition:</strong> {data.meanings[0].definitions[0].definition}</p>
              <p><strong>Synonyms:</strong> {data.meanings[0].synonyms?.[0] || "N/A"}</p>
              <p><strong>Example:</strong> {data.meanings[0].definitions[0].example || "No example provided."}</p>
              <button
                onClick={() => window.open(data.sourceUrls[0], "_blank")}
                className='read-more-btn'
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App