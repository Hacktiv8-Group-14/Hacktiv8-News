import Button from "../../atoms/Button"
import "./style.css"
import {HiArrowCircleRight, HiArrowCircleLeft} from "react-icons/hi"
import { useEffect, useState } from "react"

export default function HeadlineCard ({image, title, description, url, page, setPage}) {
    const [isDisable, setIsDisable] = useState(true)

    const onClickRight = () => {
        setPage(page += 1)
    }

    useEffect(() => {
        if (page > 1) {
            setIsDisable(false)
        } else if (page === 1) {
            setIsDisable(true)
        }
    })

    const onClickleft = () => {
        if (page >= 1) {
            setPage(page - 1)
        }
    }

    return (
        <div className="w-11/12 relative text-white">
            <div className="absolute left-0 top-0 rounded-tl-lg rounded-br-lg bg-red p-2">Hot News</div>
            <Button className={`NavNext absolute inset-y-0 left-0 ml-5 ${isDisable? "text-slate-500 cursor-not-allowed" : "" }`}><HiArrowCircleLeft size={50}  onClick={onClickleft}/></Button>
            <Button className="NavNext absolute inset-y-0 right-0 mr-5"><HiArrowCircleRight size={50}  onClick={onClickRight}/></Button>
            <img className=" w-full rounded-lg" src={image}alt="headline"/>
            <div className="mx-18 absolute inset-x-0 bottom-0 p-5 backdrop-blur-sm  bg-black bg-opacity-50 rounded-b-lg">
                <div className="border-b mb-2 font-bold truncate pb-2">{title}</div>
                <a href={url} className="line-clamp-2 text-sm hover:underline">{description}</a>
            </div>
        </div> 
    )
}