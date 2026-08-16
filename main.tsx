import { createRoot } from 'react-dom/client'
import { App } from './src/App/App'
import './style.scss'
import { BrowserRouter } from 'react-router-dom'
import './src/playground'

const container = document.getElementById('app')

if (!container) throw new Error('Root container missing')

const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
