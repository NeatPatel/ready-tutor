import { HashRouter, Routes, Route } from 'react-router-dom';
import { Nbar as Navbar } from './components/Nbar.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
