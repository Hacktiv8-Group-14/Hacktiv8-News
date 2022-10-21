import Title from "../../../component/molecules/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCardContainer from "../../../component/container/NewsCardContainer";
import { fetchNews } from "../../../features/NewsSlice";
import NewsCard from "../../../component/molecules/NewsCard";
import axios from 'axios'
import { useState } from "react";

export default function Programming () {

    // const dispatch = useDispatch()
    // const indonesia = useSelector((state) => state.news.newsList)

    const [programming, setProgramming] = useState([])

    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=programmer&from=${localDateFrom}&to=${localDateTo}&sortBy=publishedAt&pageSize=4&searchIn=description,title&apiKey=${process.env.REACT_APP_API_KEY}`)
            setProgramming(response.data.articles)
        } catch (e) {
            throw(e)
        }
    }

    useEffect(() => {
        fetchNews()
    }, []);

    return(
        <>
            <Title title="Programming" link="/programming"/>
            <NewsCardContainer>
                {programming?.map((item) => 
                    <NewsCard key={item.url}
                        source={item.source.name}
                        title={item.title}
                        author={item.author}
                        description={item.description}
                        url={item.url}
                        publishedAt={item.publishedAt}
                        urlToImage={item.urlToImage}
                    />
                )}
            </NewsCardContainer>
        </>
    )
}