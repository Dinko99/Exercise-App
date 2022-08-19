import { useState, useEffect } from 'react';
import './Search.scss';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const Search = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises.slice(0, 12));
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search'>
      <input
        type='text'
        name='search'
        placeholder='Search for exercises, muscles and equipment'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={handleEnter}
      />
      <button onClick={handleSearch}>Search</button>
      <HorizontalScrollbar
        data={bodyParts}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Search;
