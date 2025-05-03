import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRotate } from "../hooks/useRotate";

export const SolarSistem = () => {
    const dispatch = useDispatch();
    const planets = useSelector((state) => state.planets);
    const central = useSelector((state) => state.central);
    const rotateRef = useRef(null);
    const {handleRotate} = useRotate(dispatch,planets,rotateRef)
  
  
    return (
        <div className="solar-system" ref={rotateRef}>
        <img src={central.img} className="central-planet" />
        {planets.map((el, index) => (
          <img src={el.img} key={index} onClick={() => handleRotate(el,index)} className="orbiting-planet" style={{ '--planet-index': index, }}/>
        ))}
      </div>
    )
}
