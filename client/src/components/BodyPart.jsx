import Icons from '../utils/bodyPartIcons'
import { useState } from 'react'


const BodyPart = ({index,item,setBodyPart,bodyPart}) => {
    const [icons,setIcons] = useState(Icons)

  return (
    <div className="icon-card" onClick={()=> setBodyPart(item)}>
        <img src={icons[index].image} alt={item} style={{
      borderTop: bodyPart === item ? '2px solid #263EEA' : 'none'
    }}  />
        <h1>{item}</h1>
    </div>
    
  )
}

export default BodyPart