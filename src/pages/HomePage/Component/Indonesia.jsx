import Title from "../../../component/molecules/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCardContainer from "../../../component/container/NewsCardContainer";
import { fetchNews } from "../../../features/NewsSlice";
import NewsCard from "../../../component/molecules/NewsCard";
import axios from 'axios'
import { useState } from "react";

export default function Indonesia () {

    // const dispatch = useDispatch()
    // const indonesia = useSelector((state) => state.news.newsList)

    const [indonesia, setIndonesia] = useState([])

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&pageSize=4&apiKey=${process.env.REACT_APP_API_KEY}`)
            setIndonesia(response.data.articles)
        } catch (e) {
            throw(e)
        }
    }

    useEffect(() => {
        fetchNews()
        // dispatch(fetchNews(`https://newsapi.org/v2/top-headlines?country=id&pageSize=4&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, []);

    return(
        <>
            <Title title="Indonesia" link="/indonesia"/>
            <NewsCardContainer>
                {indonesia?.map((item) => 
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