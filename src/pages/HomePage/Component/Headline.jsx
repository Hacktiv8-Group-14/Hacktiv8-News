import { useEffect, useState } from "react"
import axios from "axios";

import HeadlineCard from "../../../component/molecules/HeadlineCard";

export default function Headline () {

    const [headline, setHeadline] = useState([])
    const [page, setPage ] = useState(1)

    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=viral&from=${localDateFrom}&to=${localDateTo}&sortBy=popularity&pageSize=1&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
            setHeadline(response.data.articles)
        } catch (e) {
            throw(e)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [page]);

    console.log(headline)
    
    return (
        <>
        {headline?.map((e) =>
        <HeadlineCard 
        image={e.urlToImage}
        title={e.title}
        description={e.description}
        url={e.url} 
        setPage ={setPage}
        page = {page}/>
        )}
        </>
    )
}