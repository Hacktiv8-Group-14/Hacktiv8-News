import { Link } from "react-router-dom";
import {AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"
import Logo from "../../atoms/Logo/Index";
import FormInput from "../../atoms/FormInput";


export default function Footer () {
    return ( 
    <footer className="p-4 bg-white border border-t sm:p-6 dark:bg-gray-900">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 w-36">
                <Logo/>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
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
                        <li className="mb-4">
                            <Link to="/" className="hover:text-orange">Geopolitics</Link>
                        </li>   
                    </ul>
                </div>
                <div className="lg:ml-6">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Subcribe Newslatter</h2>
                    <FormInput type="input"/>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-7"/>
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Hacktiv8 News Final Project 1 - Group 1.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <Link to="/"><AiFillInstagram size={20} className="text-gray-500 hover:text-orange"/></Link>
                <Link to="/"><AiFillGithub size={20} className="text-gray-500 hover:text-orange"/></Link>
                <Link to="/"><AiFillTwitterCircle size={20} className="text-gray-500 hover:text-orange"/></Link>
            </div>
        </div>
    </footer>

    )
}