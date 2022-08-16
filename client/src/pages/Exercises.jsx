import Search from "../components/Search"
import './Exercises.scss'

const Exercises = () => {
  return (
    <section className="exercises">
      <h1 className="title">
        Find all exercises you could imagine
      </h1>
      <Search />
    </section>
  )
}

export default Exercises