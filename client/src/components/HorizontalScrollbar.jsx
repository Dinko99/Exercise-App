import './HorizontalScrollbar.scss'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'


const HorizontalScrollbar = ({data, setBodyPart, bodyParts, bodyPart}) => {

  return (
    <ScrollMenu>
      {
        data.map((item,index)=>{
          return <BodyPart key={item.id || item} item={item} index={index} />
        })
      }
    </ScrollMenu>
    
  )
}

export default HorizontalScrollbar