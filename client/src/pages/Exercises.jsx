import Search from "../components/Search"
import './Exercises.scss'
import { useState } from 'react'
import DisplayExercises from "../components/DisplayExercises"

const Exercises = () => {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  return (
    <section className="exercises">
      <h1 className="title">
        Find all exercises you could imagine
      </h1>
      <Search exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <DisplayExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </section>
  )
}

export default Exercises