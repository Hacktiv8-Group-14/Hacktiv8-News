import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../atoms/Button";
import FormInput from "../../atoms/FormInput";
import Logo from "../../atoms/Logo/Index";

export default function Navbar () {

    const [nav, setNav] = useState(false)
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const handleNav = () => {
        setNav(!nav)
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const searchNews = (e) => {
        navigate(`/${value}`)
        setValue('')
        e.preventDefault()
    } 

    return (
        <nav className="bg-white px-2 dark:text-white sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo/>
                <div className="flex md:order-2">
                    <div className="flex mr-3 md:mr-0">
                        <FormInput className="p-2 text-black border"
                        value={value}
                        onChange={onChange}
                        />
                        <Button 
                        onClick={searchNews}
                        type="submit"
                        children = "Search"
                        className= "text-white bg-slate-600 p-2" 
                        />
                    </div>
                    <Button
                        onClick={handleNav}
                        className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <AiOutlineMenu size={25}/>
                    </Button>
                </div>
                <div className={nav? "flex flex-col mt-2 md:mt-0 md:flex-row md:ml-4 md:items-center" : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"}>
                    <Link to="/" className="mr-4">Indonesia</Link>
                    <Link to="/programming" className="mr-4">Programming</Link>
                    <Link to="/covid" className="mr-4">Covid-19</Link>
                    <Link to="/saved">Saved</Link>
                </div>
            </div>
        </nav>

        
    )
}