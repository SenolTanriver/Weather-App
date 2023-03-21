import Feels from "./Icons/Feels"
import Humidity from "./Icons/Humidity"
import Pop from "./Icons/Pop"
import Pressure from "./Icons/Pressure"
import Visibility from "./Icons/Visibility"
import Wind from "./Icons/Wind"

type Props = {
    icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop"
    title: string
    info: string | JSX.Element
    description: string
}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    pressure: Pressure,
    pop: Pop,
    visibility: Visibility
}
const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
    const Icon = icons[icon]

    return (
        <div className="icons-main">
            <div className="icons-item">
            <Icon /> <h4 className="icons-title">{title}</h4>
            </div>
            <h3>{info}</h3>
            <p className="icons-desc">{description}</p>
        </div>
    )
}
export default Tile