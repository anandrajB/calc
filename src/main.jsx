import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoadScript } from '@react-google-maps/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadScript googleMapsApiKey='AIzaSyAF1CHld8PRvNm2ZrPLpJbXFAbRqS5dSsw' libraries={['places']}>
                <App />
              </LoadScript>
  </StrictMode>,
)
