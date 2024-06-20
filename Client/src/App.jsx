import { useState } from 'react'
import Routing from './Routes/Routing'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  return (
    <>
      <ToastContainer />
      <Routing />
    </>
  )
}

export default App
