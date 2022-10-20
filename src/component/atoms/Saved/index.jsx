import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Saved () {
    const savedNews = useSelector((state) => state.saved.savedNews)
    return (
        <>
            <div className='relative'> 
                {savedNews? <div className='bg-red rounded-full -right-1 -top-2 block px-1 absolute text-small border border-white text-white'>{savedNews.length}</div> : ""}
                <Link to="/saved" ><BsFillBookmarkHeartFill color="#F67D12" size={30} /></Link>
            </div>
        </>
    )
}