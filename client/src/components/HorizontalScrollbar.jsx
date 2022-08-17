import './HorizontalScrollbar.scss'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import Icons from '../utils/bodyPartIcons'
import { useState } from 'react'


const HorizontalScrollbar = ({data}) => {
  const [icons,setIcons] = useState(Icons)

  return (
    <div className='horizontal-scrollbar'>
      <div className="icons-container">
      {
        icons.map((icon)=>{
          return <img src={icon.image} alt='image' key={icon.id} />
        })
      }
      </div>
      <div className="body-part-title-container">
        {
            data.map((item) => {
                return <h1 key={item.id}>{item}</h1>
            })
        }
      </div>
        
    </div>
  )
}

export default HorizontalScrollbar