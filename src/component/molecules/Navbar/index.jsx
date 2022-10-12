import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../atoms/Button";
import FormInput from "../../atoms/FormInput";
import Logo from "../../atoms/Logo/Index";

export default function Navbar () {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo/>
                <div className="flex md:order-2">
                    <div className="flex mr-3 md:mr-0">
                        <FormInput className="p-2 text-black border"/>
                        <Button 
                        type="submit"
                        children = "Search Berita"
                        className= "text-white bg-slate-600 p-2" 
                        />
                    </div>
                    <Button
                        onClick={handleNav}
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <AiOutlineMenu size={25}/>
                    </Button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                    <Link to="/" className="mr-4">Indonesia</Link>
                    <Link to="/programming" className="mr-4">Programming</Link>
                    <Link to="/" className="mr-4">Covid-19</Link>
                    <Link to="/">Saved</Link>
                </div>
            </div>
        </nav>

        
    )
}