import { useEffect, useState } from "react"
import axios from "axios";

import HeadlineCard from "../../../component/molecules/HeadlineCard";

export default function Headline () {

    const [headline, setHeadline] = useState([])
    const [index, setIndex] = useState(0)

    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=viral&from=${localDateFrom}&to=${localDateTo}&sortBy=popularity&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`)
            setHeadline(response.data.articles)
        } catch (e) {
            throw(e)
        }
    }

    useEffect(() => {
        fetchNews()
    }, []);
    
    return (
        <>
        <HeadlineCard 
        image={headline[index]?.urlToImage}
        title={headline[index]?.title}
        description={headline[index]?.description}
        url={headline[index]?.url} 
        setIndex ={setIndex}
        index = {index}/>
        </>
    )
}