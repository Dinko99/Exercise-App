import Icons from '../utils/bodyPartIcons'
import { useState } from 'react'

const BodyPart = ({index,item}) => {
    const [icons,setIcons] = useState(Icons)

  return (
    <div className="icon-card">
        <img src={icons[index].image} alt={item} />
        <h1>{item}</h1>
    </div>
    
  )
}

export default BodyPart