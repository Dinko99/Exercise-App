import './HorizontalScrollbar.scss'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { useContext } from 'react'
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa'
import BodyPart from './BodyPart'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <FaArrowLeft onClick={()=> scrollPrev()} className='arrow-left' />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <FaArrowRight onClick={()=> scrollNext()} className='arrow-right' />
  );
};


const HorizontalScrollbar = ({data, setBodyPart, bodyParts, bodyPart}) => {

  return (
    <div className="horizontal-scrollbar">
    <ScrollMenu LeftArrow={LeftArrow}  RightArrow={RightArrow}>
      {
        data.map((item,index)=>{
          return <BodyPart key={item.id || item} item={item} index={index} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        })
      }
    </ScrollMenu>
    </div>
    
  )
}

export default HorizontalScrollbar