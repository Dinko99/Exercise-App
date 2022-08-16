import './HorizontalScrollbar.scss'

const HorizontalScrollbar = ({data}) => {
  return (
    <div className='horizontal-scrollbar'>
        {
            data.map((bodyPart) => {
                return <h1>{bodyPart}</h1>
            })
        }
    </div>
  )
}

export default HorizontalScrollbar