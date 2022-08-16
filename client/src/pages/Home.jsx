import React from 'react'
import Banner from '../assets/images/test2.webp'
import './Home.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className="hero-text">
        <h3>Fitness Club</h3>
        <h1>Eat, Sleep And Repeat</h1>
        <p>Check out the most personalized exercises for you</p>
        <button>Explore Exercises</button>
      </div>
      <img src={Banner} alt="Banner" />
    </section>
  )
}

export default Home