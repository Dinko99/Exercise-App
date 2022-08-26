import { Link } from 'react-router-dom';
import './ExerciseCard.scss';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <div className='info-container'>
        <button>{exercise.bodyPart}</button>
        <button>{exercise.target}</button>
      </div>
      <p className='bold'>{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;
