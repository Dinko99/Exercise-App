import { BallTriangle } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color='#263eea'
      ariaLabel='ball-triangle-loading'
      wrapperClass=''
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      visible={true}
    />
  );
};

export default Loader;
