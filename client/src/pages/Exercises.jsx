import Search from '../components/Search';
import './Exercises.scss';
import { useState } from 'react';
import DisplayExercises from '../components/DisplayExercises';
import Navbar from '../components/Navbar';

const Exercises = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  return (
    <>
      <Navbar />
      <section className='exercises'>
        <h1 className='title'>Find all exercises you could imagine</h1>
        <Search
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setItemOffset={setItemOffset}
        />
        <DisplayExercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      </section>
    </>
  );
};

export default Exercises;
