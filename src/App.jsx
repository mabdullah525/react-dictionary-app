import React from 'react'

const App = () => {
  return (
    <div className='app'>
      <h1>Dictionary App</h1>
      <div className='container'>
        <div className='search-bar'>
          <input type='text' placeholder='Search for a word...' />
          <button>Search</button>
        </div>
        <div className='results'></div>

      </div>
    </div>
  )
}

export default App