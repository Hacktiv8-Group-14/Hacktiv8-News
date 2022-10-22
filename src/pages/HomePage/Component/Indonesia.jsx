import Title from "../../../component/molecules/Title";
import { useEffect } from "react";
import NewsCardContainer from "../../../component/container/NewsCardContainer";
import NewsCard from "../../../component/molecules/NewsCard";
import axios from 'axios'
import { useState } from "react";

export default function Indonesia () {

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
    }, []);

    return(
        <>
            <Title title="Indonesia News" link="/indonesia"/>
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