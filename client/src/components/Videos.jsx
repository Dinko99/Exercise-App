import './Videos.scss';

const Videos = ({ exerciseVideos, name }) => {
  return (
    <div className='videos'>
      <h1 className='videos-title'>
        Watch <span>{name}</span> exercise videos
      </h1>
      <div className='video-container'>
        {exerciseVideos?.slice(0, 4)?.map((item) => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />

              <h4>{item.video.title}</h4>
              <p>{item.video.channelName}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
