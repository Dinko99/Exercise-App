import './DisplayExercises.scss';
import { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';

const DisplayExercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <div className='display-exercises'>
      {exercises.map((exercise, index) => {
        return <ExerciseCard key={index} exercise={exercise} />;
      })}
    </div>
  );
};

export default DisplayExercises;
