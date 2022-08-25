import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import Videos from '../components/Videos';
import SimilarExercises from '../components/SimilarExercises';
import './ExerciseDetail.scss';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div className='exercise-detail'>
      <Detail exerciseDetail={exerciseDetail} />
      <Videos />
      <SimilarExercises />
    </div>
  );
};

export default ExerciseDetail;
