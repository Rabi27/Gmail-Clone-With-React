import React from 'react'
import './App.css'
import Header from "./Header"
import SideBar from "./SideBar"

function App(){
  return (
    <div className="app">
      <Header/>
      <SideBar />
      <h1>Lets Build Gmail</h1>
    </div>
  )
}

export default App