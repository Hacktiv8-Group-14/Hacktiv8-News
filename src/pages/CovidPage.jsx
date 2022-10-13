import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import Navbar from "../component/molecules/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/NewsSlice";
import { useEffect } from "react";
import NewsCardContainer from "../component/container/NewsCardContainer";
import NewsCard from "../component/molecules/NewsCard";

export default function CovidPage () {

    const dispatch = useDispatch()
    const covidNews = useSelector((state) => state.news.newsList)
    
    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    useEffect(() => {
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q=coronavirus&from=${localDateFrom}&to=${localDateTo}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, []);

    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>Covid News</Header>
            <NewsCardContainer>
                {covidNews.map((item)=> 
                <NewsCard key={item.url}
                source={item.source.name}
                title={item.title}
                author={item.author}
                description={item.description}
                url={item.url}
                publishedAt={item.publishedAt}
                API={item}
                />
                )}
            </NewsCardContainer>
        </PageContainer>
        </>
    )
}