import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'

function NewsCard({source, title, author, description, url, API}) {

    const navigate = useNavigate()

    const NavDetail = () => {
        navigate(`/${title}`)
    }

    return(
        <div className="border-2 p-2 rounded-lg break-words">
            <header className="border-b-2">
                <h5 className="text-lg">{source}</h5>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">{title}</a>
                <h3 className="mb-2">{!author || author === "" ? "-" : author}</h3>
            </header>
            <div className="mt-2 mb-4">
                <p>{description}</p>
            </div>
            <Button children="News Page"
            className="text-white bg-slate-600 p-2"
            onClick={NavDetail}
            />
        </div>
    )
}

export default NewsCard

NewsCard.propTypes = {
    source: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
}

NewsCard.defaultProps = {
    source: '-',
    url: 'https://',
    title: '-',
    author: '-',
    description: '-'
}