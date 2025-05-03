import { useSelector } from "react-redux";
import {Orbit} from "lucide-react"

export const CentralInfo = () => {
    const central = useSelector((state) => state.central);

    return (
        <div className="planet_info">
        <h2>{central?.name} <Orbit /></h2>
        <p><span>Radius:</span> {central?.info?.radius}</p>
        <p><span>{central.info.distanceFromSun && "Distance from Sun:"}</span> {central?.info?.distanceFromSun}</p>
        <p><span>Temperature:</span> {central?.info?.temperature}</p>
        <p>{central?.description}</p>
      </div>
    )
}
