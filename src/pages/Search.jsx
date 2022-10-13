import Navbar from "../component/molecules/Navbar"
import PageContainer from "../component/container/PageContainer"
import Header from "../component/atoms/Header"
import NewsCard from "../component/molecules/NewsCard"
import NewsCardContainer from "../component/container/NewsCardContainer"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchNews } from "../features/NewsSlice"

export default function Search () {

    const{value} = useParams() 
    const dispatch = useDispatch()
    const date = new Date()
    const newsSearch = useSelector((state) => state.news.newsList)

    console.log(date)

    useEffect(()=> {
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q=${value}&from=${date}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, [value])

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
                API={item}
                />
                )}
            </NewsCardContainer>
        </PageContainer>
        </>
    )
}