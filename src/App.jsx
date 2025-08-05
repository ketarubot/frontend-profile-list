import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileLayout from './pages/ProfileLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/profile" element={<ProfileLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
