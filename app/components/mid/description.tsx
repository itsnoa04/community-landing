import options from "../../templateConfig"
import Bubble from "../global/bubble"

const Description = () => {
    return (
        <Bubble>
            <h1 className="bg-transparent text-sm">{options?.community?.description}</h1>   
        </Bubble>
    )
}

export default Description