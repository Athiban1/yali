
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set cursor to none only on non-touch devices
if (window.matchMedia('(hover: hover)').matches) {
  document.body.style.cursor = 'none';
}

createRoot(document.getElementById("root")!).render(<App />);
