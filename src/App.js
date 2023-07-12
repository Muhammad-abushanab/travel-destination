
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Header from './components/header/Header';
import TourDetails from './components/TourDetails/TourDetails';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails />}/>
      </Routes>
    </>
  );
}

export default App;
