import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './context/ThemeContext.jsx'
import store from './reducer/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeContextProvider >

<App />
</ThemeContextProvider>
    </Provider>
    

  </StrictMode>,
)
