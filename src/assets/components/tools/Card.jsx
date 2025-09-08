import { Github } from "lucide-react"
import Button from "./Button"
import { Play } from "lucide-react"

const Card = ({ children, image, title }) => {
    return (
        <div className='neu-protrude dark:neu-protrude w-full flex-col items-center'>
            <div>
                <img src={image} alt={title} className="w-60 rounded-md" />
            </div>
            <div>
                <div className="font-bold text-lg">
                    {title}
                </div>
                <div className="text-sm overflow-wrap-">
                    {children}
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button className=""><Play/></Button>
                <Button className=""><Github /></Button>
            </div>
        </div>
    )
}

export default Card