import { Link } from "react-router-dom"

export default function NavCategory () {
    return (
        <div className="justify-center flex text-black text-xs">
            <Link className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange" to="/indonesia">Indonesia</Link>
            <Link className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange" to="/covid">Covid</Link>
            <Link className="bg-slate-300 p-2 rounded-lg m-2 hover:bg-orange" to="/programming">Programming</Link>
        </div>
    )
}