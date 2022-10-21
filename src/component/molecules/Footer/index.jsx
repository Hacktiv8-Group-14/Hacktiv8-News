import { Link } from "react-router-dom";
import {AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"
import Logo from "../../atoms/Logo/Index";
import FormInput from "../../atoms/FormInput";
import Button from "../../atoms/Button";
import { IoIosPaperPlane } from "react-icons/io";


export default function Footer () {
    return ( 
    <footer className="p-4 bg-white border-t sm:p-6 dark:bg-gray-900">
        <div className="flex justify-between">
            <div className="mb-6 md:mb-0 w-36">
                <Logo/>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                <div >
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Categories</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <Link to="/Indonesia" className="hover:text-orange">Indonesia</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/programming" className="hover:text-orange">Programming</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/covid" className="hover:text-orange">Covid</Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:ml-6">
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subcribe Newsletter</h2>
                    <form className="flex" >
                        <FormInput className=" w-full rounded-l-lg text-black border p-1.5"
                        placeholder="Email Address"
                        />
                        <Button 
                        type="submit"
                        className= "text-white bg-orange rounded-r-lg px-3 " 
                        >
                        <IoIosPaperPlane/>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-7"/>
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Hacktiv8 News Final Project 1 - Group 14.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <Link to="/"><AiFillInstagram size={20} className="text-gray-500 hover:text-orange"/></Link>
                <Link to="/"><AiFillGithub size={20} className="text-gray-500 hover:text-orange"/></Link>
                <Link to="/"><AiFillTwitterCircle size={20} className="text-gray-500 hover:text-orange"/></Link>
            </div>
        </div>
    </footer>

    )
}