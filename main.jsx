import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
 <ShopContextProvider>
  <App />
 </ShopContextProvider>
  
  
)
