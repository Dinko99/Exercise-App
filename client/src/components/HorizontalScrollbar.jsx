import './HorizontalScrollbar.scss'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'


const HorizontalScrollbar = ({data, setBodyPart, bodyParts, bodyPart}) => {

  return (
    <div className='horizontal-scrollbar'>
      {
        data.map((item,index)=>{
          return <BodyPart key={item.id || item} item={item} index={index} />
        })
      }
    </div>
  )
}

export default HorizontalScrollbar