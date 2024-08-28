
import Navber from './components/Navber';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
      <div>
        <div>
          <Navber></Navber>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
