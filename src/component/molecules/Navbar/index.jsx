import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import Button from "../../atoms/Button";
import FormInput from "../../atoms/FormInput";
import Logo from "../../atoms/Logo/Index";
import Saved from "../../atoms/Saved";

export default function Navbar () {

    const [value, setValue] = useState("")
    const [isDisabble, setIsDisabble] = useState(false)
    const navigate = useNavigate()

    const onChange = (e) => {
        setValue(e.target.value)
    }

    useEffect (() => {
        if (value === "") {
            setIsDisabble(true)
        } else {
            setIsDisabble(false)
        }
    })

    const searchNews = (e) => {
            e.preventDefault()
            navigate(`/q=${value}`)
             setValue('')
    } 

    return (
        <>
        <nav className="bg-white px-2 dark:text-white sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <Logo className="w-14"/>
                <form className="flex " onSubmit={searchNews} required>
                        <FormInput className="rounded-l-lg text-black border p-1.5"
                        value={value}
                        onChange={onChange}
                        />
                        <Button 
                        onClick={searchNews}
                        type="submit"
                        className= {`text-white bg-orange hover:bg-secondary-orange rounded-r-lg px-3 ${isDisabble? "cursor-not-allowed" : ""}`}
                        disabled = {isDisabble}
                        >
                        <RiSearchLine/>
                        </Button>
                </form>
                <Saved/>
            </div>
        </nav>
        </>
    )
}