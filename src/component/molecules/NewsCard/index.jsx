import PropTypes from 'prop-types'

function NewsCard({source, title, author, description, url}) {
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