import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import NotFound from './pages/NotFound'
import Show from './pages/Show'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/threads/new' element={<Create />} />
          <Route path='/threads/:id' element={<Show />}/>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-red-600'>HotReloadddd</p>
      <p className='text-2xl text-red-500'>Persona5</p> */}
    </>
  )
}

export default App
