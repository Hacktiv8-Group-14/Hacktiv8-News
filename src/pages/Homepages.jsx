import Navbar from "../component/molecules/Navbar";
import PageContainer from "../component/container/PageContainer"
import Header from "../component/atoms/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../features/NewsSlice";
import NewsCardContainer from "../component/container/NewsCardContainer";
import NewsCard from "../component/molecules/NewsCard";


export default function Homepage () {

    const dispatch = useDispatch()
    const indonesiaNews = useSelector((state) => state.news.newsList)

    useEffect(() => {
        dispatch(fetchNews(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, [] )
    
  
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>Indonesia News</Header>
            <NewsCardContainer>
                {indonesiaNews.map((item)=> 
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
        </PageContainer>
        </>
    )
}