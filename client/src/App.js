import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import ExerciseDetail from './components/ExerciseDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='exercise/:id' element={<ExerciseDetail />} />
      </Routes>
    </>
  );
}

export default App;
