import Navbar from "../component/molecules/Navbar"
import PageContainer from "../component/container/PageContainer"
import Header from "../component/atoms/Header"
import NewsCard from "../component/molecules/NewsCard"
import NewsCardContainer from "../component/container/NewsCardContainer"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchNews } from "../features/NewsSlice"
import Pagination from "../component/molecules/Pagination"

export default function Search () {

    const{value} = useParams() 
    const dispatch = useDispatch()
    const date = new Date()
    const newsSearch = useSelector((state) => state.news.newsList)
    const totalResult = useSelector((state) => state.news.totalResult)
    const [size, setSize] = useState(25)
    const [current, setCurrent] = useState(1)

    console.log(date)

    useEffect(()=> {
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q=${value}&from=${date}&sortBy=publishedAt&pageSize=${size}&page=${current}&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, [current])

    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>Hasil Pencarian "{value}"</Header>
            <NewsCardContainer>
                {newsSearch.map((item)=> 
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
            <Pagination
            setSize = {setSize}
            size = {size} 
            current = {current}
            setCurrent = {setCurrent}
            news = {newsSearch}
            totalResult = {totalResult}
            />
        </PageContainer>
        
        </>
    )
}