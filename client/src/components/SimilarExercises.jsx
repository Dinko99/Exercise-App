import './SimilarExercises.scss';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <div className='similar-exercises'>
      <h1>
        Similar <span>target muscle</span> exercises
      </h1>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SimilarExercises;
