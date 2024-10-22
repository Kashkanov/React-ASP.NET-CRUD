import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CRUD from '../CRUD.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CRUD />
  </StrictMode>,
)
