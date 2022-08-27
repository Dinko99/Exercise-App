import './DisplayExercises.scss';
import { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Pagination from './Pagination';
import Loader from './Loader';

const DisplayExercises = ({
  exercises,
  setExercises,
  bodyPart,
  itemOffset,
  setItemOffset,
}) => {
  const [currentExercises, setCurrentExercises] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === 'all') {
        exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchExerciseData();
    setItemOffset(0);
  }, [bodyPart]);

  return (
    <>
      <div className='display-exercises'>
        {currentExercises.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </div>
      <Pagination
        exercises={exercises}
        currentExercises={currentExercises}
        setCurrentExercises={setCurrentExercises}
        bodyPart={bodyPart}
        itemOffset={itemOffset}
        setItemOffset={setItemOffset}
      />
    </>
  );
};

export default DisplayExercises;
