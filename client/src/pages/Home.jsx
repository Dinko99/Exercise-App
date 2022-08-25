import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='hero-text'>
          <h3>Fitness Club</h3>
          <h1>Eat, Sleep And Repeat</h1>
          <p>Check out the most personalized exercises for you</p>
          <Link to='/exercises'>
            <button className='bold'>Explore Exercises</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
