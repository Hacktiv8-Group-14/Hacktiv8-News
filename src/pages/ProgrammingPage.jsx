import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from "../features/NewsSlice"
import Navbar from "../component/molecules/Navbar"
import Header from "../component/atoms/Header"
import PageContainer from "../component/container/PageContainer"
import NewsCardContainer from "../component/container/NewsCardContainer"
import NewsCard from "../component/molecules/NewsCard"
import Pagination from "../component/molecules/Pagination"

const ProgrammingPage = () => {
    const dispatch = useDispatch()

    const newsList = useSelector((state) => state.news.newsList)
    const totalResult = useSelector((state) => state.news.totalResult)
    const [size, setSize] = useState(25)
    const [current, setCurrent] = useState(1)
    
    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    useEffect(() => {
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q=programming&from=${localDateFrom}&to=${localDateTo}&pageSize=20&sortBy=publishedAt&pageSize=${size}&page=${current}&searchIn=description,title&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, [current]);

    return(
        <>
            <Navbar/>
            <PageContainer>
                <Header>Programming News</Header>
                <NewsCardContainer>
                    {newsList.map((item) => (
                        <NewsCard key={item.url} 
                            source={item.source.name}
                            title={item.title}
                            author={item.author} 
                            description={item.description} 
                            url={item.url}
                            urlToImage={item.urlToImage}
                        />
                    ))}
                </NewsCardContainer>
                <Pagination
                setSize = {setSize}
                size = {size} 
                current = {current}
                setCurrent = {setCurrent}
                news = {newsList}
                totalResult = {totalResult}
                />
            </PageContainer>
        </>
    )
}

export default ProgrammingPage