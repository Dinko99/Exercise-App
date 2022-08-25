import './Detail.scss';
import Exercise1 from '../assets/icons/exercise1.png';
import Exercise2 from '../assets/icons/exercise2.png';
import Exercise3 from '../assets/icons/exercise3.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <div className='detail'>
      <img src={gifUrl} alt={name} loading='lazy' className='gif' />
      <div className='exercise-info'>
        <h1>{name}</h1>
        <p className='text'>
          Exercises keep you strong. {name} bup is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </p>
        <div className='icons'>
          <div className='additional-info'>
            <img src={Exercise1} alt={bodyPart} className='icon' />
            <p>{bodyPart}</p>
          </div>
          <div className='additional-info'>
            <img src={Exercise2} alt={target} className='icon' />
            <p>{target}</p>
          </div>
          <div className='additional-info'>
            <img src={Exercise3} alt={equipment} className='icon' />
            <p>{equipment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
