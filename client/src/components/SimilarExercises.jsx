import './SimilarExercises.scss';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <div className='similar-exercises'>
      <h1>
        Similar <span>target muscle</span> exercises
      </h1>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SimilarExercises;
