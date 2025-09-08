import { Github } from "lucide-react"
import Button from "./Button"
import { Play } from "lucide-react"

const Card = ({ children, image, title, badge1, badge2 }) => {
    return (
        <div className='neu-protrude dark:neu-protrude w-full flex-col items-center'>
            <div>
                <img src={image} alt={title} className="w-60 rounded-md" />
            </div>
            <div>
                <div className="font-bold text-lg p-2">
                    {title}
                </div>
                <div className="text-sm px-2">
                    {children}
                </div>
            </div>
            <div className="flex justify-between gap-2 p-2">
                <div className="flex gap-2 items-center">
                    {badge1 &&
                        <div className="badge-sm badge badge-soft badge-accent">{badge1}</div>
                    }
                    {badge2 &&
                        <div className="badge-sm badge badge-soft badge-secondary">{badge2}</div>
                    }
                </div>
                <div className="flex gap-2">
                    <Button className="hover:bg-green-600 dark:hover:shadow-[0_0_10px_#4effa3,0_0_25px_#22c55e,0_0_45px_#16a34a] hover:shadow-[0_0_10px_#4effa3] transition-all"><Play /></Button>
                    <Button className="hover:bg-purple-700 dark:hover:shadow-[0_0_10px_#c27aff,0_0_25px_#a855f7,0_0_45px_#7c3aed] hover:shadow-[0_0_10px_#c27aff] transition-all"><Github /></Button>
                </div>
            </div>
        </div>
    )
}

export default Card